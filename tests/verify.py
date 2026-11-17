#!/usr/bin/env python3
import json
import re
from collections import Counter
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
Q=json.loads((ROOT/'assets/data/questions.json').read_text(encoding='utf-8'))
EXPECTED={'halogen':9,'alcohol':10,'phenol':9,'carbonyl':19,'acid':22}

def require(ok,msg):
    if not ok: raise AssertionError(msg)

def main():
    require((ROOT/'index.html').exists(),'Thiếu index.html ở gốc')
    require((ROOT/'.nojekyll').exists(),'Thiếu .nojekyll')
    require(len(Q)==69,f'Sai tổng số câu: {len(Q)}')
    require(Counter(x['topic'] for x in Q)==Counter(EXPECTED),'Sai số câu theo chủ đề')
    require(len({x['id'] for x in Q})==69,'Trùng ID câu hỏi')
    require(all('[HÌNH]' not in (x['stem']+' '.join(o['text'] for o in x['options'])) for x in Q),'Còn placeholder [HÌNH] thô')
    require(max(Counter(x['explanation'] for x in Q).values())<=2,'Lời giải chung bị lặp quá nhiều')
    for q in Q:
        require(q['answer'],f"Thiếu đáp án {q['id']}")
        if q['type']=='single':
            require([o['id'] for o in q['options']]==list('ABCD'),f"Sai nhãn phương án {q['id']}")
            require(q['answer'] in 'ABCD',f"Đáp án ngoài A-D {q['id']}")
        for p in q.get('media',[]): require((ROOT/p).exists(),f"Thiếu ảnh {q['id']}: {p}")
        for o in q.get('options',[]):
            if o.get('image'): require((ROOT/o['image']).exists(),f"Thiếu ảnh phương án {q['id']}: {o['image']}")
    byid={x['id']:x for x in Q}
    require(byid['halogen-9']['answer']=='D','Sai đáp án Halogen câu 9')
    require('(a) và (c)' in byid['halogen-9']['explanation'],'Chưa sửa giải thích Halogen câu 9')
    require(byid['carbonyl-41']['answer']=='A','Sai đáp án Carbonyl câu 41')
    js=(ROOT/'assets/js/app.js').read_text(encoding='utf-8')
    corpus=js+(ROOT/'assets/data/questions.json').read_text(encoding='utf-8')
    require('NaAlH' not in corpus,'Còn NaAlH₄ sai')
    for token in ['LiAlH','Tollens','C₆H₅OH + 3Br₂','CH₃COOH + NaHCO₃','69 câu']:
        require(token in corpus,f'Thiếu nội dung khóa: {token}')
    for token in ['labVisual','labRunToken','clearTimeout(labRunTimer)','clearTimeout(runnerTimer)','normalizeState(JSON.parse','rescueStarted','activeSeconds=Math.max(0,activeSeconds-runner.elapsed)']:
        require(token in js,f'Thiếu vá hồi quy: {token}')
    require('eq=visual.reacted?l.equation' in js,'Lab còn hiện phương trình sản phẩm khi điều kiện không phản ứng')
    require('Không có phương trình phản ứng trong điều kiện đã chọn.' in js,'Thiếu thông báo phương trình cho mẫu đối chứng/thiếu nhiệt')
    require('runnerTimer=setTimeout(spawnObstacle,1300)' in js,'Timeout mở đầu runner chưa được quản lý')
    require('heatAtRun=heat' in js and 'controls.forEach(x=>x.disabled=true)' in js,'Control Lab chưa được khóa trong lúc mô phỏng')
    for p in ['assets/audio/nhac-nen.mp3','assets/audio/tra-loi-dung.mp3','assets/audio/tra-loi-sai.wav','assets/images/mol-running.png']:
        require((ROOT/p).exists() and (ROOT/p).stat().st_size>1000,f'Thiếu/rụng tài sản: {p}')
    html=(ROOT/'index.html').read_text(encoding='utf-8')
    require('http://' not in html and 'https://' not in html,'Có phụ thuộc mạng trong index')
    print('PASS: 69 câu, 5 chủ đề, tài sản, đáp án khóa, công thức và cấu trúc GitHub Pages.')

if __name__=='__main__': main()
