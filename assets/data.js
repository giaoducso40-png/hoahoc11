/* Nguồn dữ liệu đã hiệu đính từ tài liệu DẪN XUẤT HYDROCARBON LỚP 11. */
window.CHEM_DATA = (() => {
  const modules = [
    {
      id:'halogen', no:'01', title:'Dẫn xuất halogen', color:'#62e6a7', image:'assets/images/topic-halogen.webp', time:24,
      tagline:'Theo dấu liên kết C–X và chọn đúng con đường thế hay tách.',
      goals:['Nhận diện và gọi tên dẫn xuất halogen','Xác định bậc của carbon mang halogen','Phân biệt phản ứng thế và phản ứng tách','Vận dụng quy tắc Zaitsev đúng bản chất'],
      sections:[
        {title:'Khái niệm và danh pháp',body:`<p>Dẫn xuất halogen hình thành khi một hay nhiều nguyên tử H trong hydrocarbon được thay bằng F, Cl, Br hoặc I. Có thể biểu diễn khái quát là <span class="chem">R–X</span> hoặc <span class="chem">R–X<sub>n</sub></span>.</p><div class="formula-box"><strong>Tên thay thế:</strong> số chỉ vị trí + fluoro/chloro/bromo/iodo + tên hydrocarbon mạch chính.</div><p>Liên kết bội được ưu tiên nhận bộ số nhỏ trước nhóm thế halogen. Bậc của dẫn xuất là bậc của carbon liên kết trực tiếp với X; chỉ có bậc I, II, III.</p>`},
        {title:'Liên kết và tính chất vật lí',body:`<div class="molecule" aria-label="Mô hình liên kết carbon halogen phân cực"><span class="atom c">C<sup>δ+</sup></span><i class="bond"></i><span class="atom x">X<sup>δ−</sup></span></div><p>Liên kết C–X phân cực về phía halogen. Phần lớn dẫn xuất halogen ít tan trong nước và tan tốt hơn trong dung môi hữu cơ. Với các chất tương tự, nhiệt độ sôi thường tăng theo <span class="chem">F &lt; Cl &lt; Br &lt; I</span>.</p>`},
        {title:'Phản ứng thế',body:`<p>Khi X gắn vào carbon no, kiềm nước và nhiệt độ thuận lợi cho phản ứng thế, tạo alcohol.</p><div class="reaction"><span class="chem">R–X + NaOH</span><span class="arrow">⟶<small>dung dịch, đun nóng</small></span><span class="chem">R–OH + NaX</span></div>`},
        {title:'Phản ứng tách',body:`<p>KOH trong ethanol và đun nóng ưu tiên tách HX, tạo alkene.</p><div class="reaction"><span class="chem">R–CH<sub>2</sub>–CHX–R′ + KOH</span><span class="arrow">⟶<small>C<sub>2</sub>H<sub>5</sub>OH, t°</small></span><span class="chem">alkene + KX + H<sub>2</sub>O</span></div><p><strong>Quy tắc Zaitsev:</strong> alkene bền hơn, có liên kết đôi được thế nhiều hơn thường là sản phẩm chính.</p>`},
        {title:'Ứng dụng và an toàn',body:`<p>Dẫn xuất halogen được dùng trong sản xuất polymer, dược phẩm, dung môi, thuốc bảo vệ thực vật và tác nhân lạnh.</p><div class="safety">Nhiều chất độc, bền trong môi trường hoặc làm suy giảm tầng ozone. Không ngửi, nếm hay tiếp xúc trực tiếp.</div>`}
      ]
    },
    {
      id:'alcohol', no:'02', title:'Alcohol', color:'#58e4ff', image:'assets/images/topic-alcohol.webp', time:28,
      tagline:'Giải mã nhóm –OH, liên kết hydrogen và các lối phản ứng đặc trưng.',
      goals:['Nhận diện –OH gắn với carbon no','Gọi tên và xác định bậc alcohol','Giải thích tính tan và nhiệt độ sôi','Viết đúng phản ứng với Na, tách nước, oxi hóa'],
      sections:[
        {title:'Khái niệm và tên gọi',body:`<p>Alcohol có nhóm <span class="chem">–OH</span> liên kết trực tiếp với carbon no. Alcohol no, đơn chức, mạch hở có công thức <span class="chem">C<sub>n</sub>H<sub>2n+1</sub>OH</span> hay <span class="chem">C<sub>n</sub>H<sub>2n+2</sub>O</span>.</p><div class="formula-box">Tên hydrocarbon + vị trí nhóm –OH + hậu tố <strong>-ol</strong>: propan-1-ol, propan-2-ol, prop-2-en-1-ol.</div>`},
        {title:'Liên kết hydrogen',body:`<div class="molecule"><span class="atom c">R</span><i class="bond"></i><span class="atom o">O</span><i class="bond"></i><span class="atom h">H</span></div><p>Liên kết O–H và C–O đều phân cực về phía O. Liên kết hydrogen làm alcohol có nhiệt độ sôi cao; alcohol nhỏ tan tốt trong nước, độ tan giảm khi gốc hydrocarbon dài hơn.</p>`},
        {title:'Tác dụng với sodium',body:`<div class="reaction"><span class="chem">R(OH)<sub>a</sub> + aNa</span><span class="arrow">⟶</span><span class="chem">R(ONa)<sub>a</sub> + a/2 H<sub>2</sub>↑</span></div><p>Hệ số <strong>a/2</strong> phải được giữ chính xác khi cân bằng.</p>`},
        {title:'Tách nước và oxi hóa',body:`<div class="reaction"><span class="chem">C<sub>n</sub>H<sub>2n+1</sub>OH</span><span class="arrow">⟶<small>H<sub>2</sub>SO<sub>4</sub> đặc, ≈170 °C</small></span><span class="chem">C<sub>n</sub>H<sub>2n</sub> + H<sub>2</sub>O</span></div><p>Alcohol bậc I bị CuO oxi hóa thành aldehyde; bậc II thành ketone; bậc III không phản ứng trong điều kiện này. Với <em>n</em> alcohol đơn chức khác nhau, số ether tối đa là <span class="chem">n(n+1)/2</span>.</p>`},
        {title:'Cháy, điều chế và an toàn',body:`<div class="reaction"><span class="chem">C<sub>n</sub>H<sub>2n+2</sub>O + 3n/2 O<sub>2</sub></span><span class="arrow">⟶</span><span class="chem">nCO<sub>2</sub> + (n+1)H<sub>2</sub>O</span></div><p>Ethanol có thể điều chế bằng hydrate hóa ethylene hoặc lên men glucose.</p><div class="safety">Methanol rất độc; ethanol gây hại khi lạm dụng. Tuyệt đối không nếm hay ngửi hóa chất.</div>`}
      ]
    },
    {
      id:'phenol', no:'03', title:'Phenol', color:'#9d7cff', image:'assets/images/topic-phenol.webp', time:20,
      tagline:'Quan sát cách vòng benzene làm thay đổi tính chất của nhóm –OH.',
      goals:['Phân biệt phenol với benzyl alcohol','Giải thích tính acid rất yếu','Viết phản ứng với NaOH và bromine','Nhận biết giới hạn an toàn của phenol'],
      sections:[
        {title:'Khái niệm',body:`<p>Phenol là hợp chất có nhóm <span class="chem">–OH</span> liên kết trực tiếp với carbon của vòng benzene. <span class="chem">C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH</span> là benzyl alcohol, không phải phenol.</p>`},
        {title:'Cấu tạo và tính chất',body:`<p>Cặp electron của O liên hợp với vòng thơm: vòng được hoạt hóa ở vị trí ortho, para; liên kết O–H phân cực hơn so với alcohol. Phenol rắn, ít tan trong nước lạnh và độc, gây bỏng.</p><div class="formula-box">Tính acid gần đúng: H<sub>2</sub>CO<sub>3</sub> &gt; C<sub>6</sub>H<sub>5</sub>OH &gt; alcohol.</div>`},
        {title:'Tính acid rất yếu',body:`<div class="reaction"><span class="chem">C<sub>6</sub>H<sub>5</sub>OH + NaOH</span><span class="arrow">⟶</span><span class="chem">C<sub>6</sub>H<sub>5</sub>ONa + H<sub>2</sub>O</span></div><p>Phenol không làm đổi màu quỳ tím nhưng vẫn phản ứng với Na và NaOH.</p>`},
        {title:'Phản ứng với bromine',body:`<div class="reaction"><span class="chem">C<sub>6</sub>H<sub>5</sub>OH + 3Br<sub>2</sub></span><span class="arrow">⟶<small>nước bromine</small></span><span class="chem">2,4,6-C<sub>6</sub>H<sub>2</sub>Br<sub>3</sub>OH↓ + 3HBr</span></div><p>Hiện tượng: nước bromine mất màu và xuất hiện kết tủa trắng 2,4,6-tribromophenol.</p><div class="safety">Chỉ quan sát dưới dạng mô phỏng. Không tự thực hiện ngoài phòng thí nghiệm.</div>`}
      ]
    },
    {
      id:'carbonyl', no:'04', title:'Hợp chất carbonyl', color:'#ff7f9d', image:'assets/images/topic-carbonyl.webp', time:30,
      tagline:'Phân biệt aldehyde–ketone bằng cấu trúc, phản ứng và dấu hiệu thí nghiệm.',
      goals:['Phân biệt nhóm –CHO và >C=O','Gọi tên aldehyde và ketone','Giải thích phân cực của C=O','Chọn đúng thuốc thử phân biệt'],
      sections:[
        {title:'Aldehyde và ketone',body:`<p>Aldehyde có nhóm <span class="chem">–CHO</span>, dạng <span class="chem">R–CHO</span>. Ketone có nhóm <span class="chem">&gt;C=O</span> giữa hai gốc hydrocarbon, dạng <span class="chem">R–CO–R′</span>.</p><div class="formula-box">Aldehyde no, đơn chức, mạch hở: C<sub>n</sub>H<sub>2n</sub>O (n ≥ 1). Ketone cùng dạng nhưng n ≥ 3.</div>`},
        {title:'Cấu tạo nhóm carbonyl',body:`<div class="molecule"><span class="atom c">C<sup>δ+</sup></span><i class="bond"></i><i class="bond" style="margin-left:-41px;transform:translateY(9px)"></i><span class="atom o">O<sup>δ−</sup></span></div><p>Liên kết C=O phân cực mạnh. Carbon carbonyl có dạng gần tam giác phẳng, góc liên kết xấp xỉ 120°.</p>`},
        {title:'Phản ứng khử',body:`<div class="reaction"><span class="chem">R–CHO / R–CO–R′</span><span class="arrow">⟶<small>NaBH<sub>4</sub> hoặc LiAlH<sub>4</sub></small></span><span class="chem">alcohol bậc I / alcohol bậc II</span></div><p>Chất khử đúng là <strong>LiAlH<sub>4</sub></strong>, không phải NaAlH<sub>4</sub>.</p>`},
        {title:'Nhận biết aldehyde',body:`<p>Aldehyde thông thường làm mất màu nước bromine, tạo gương bạc với Tollens và kết tủa đỏ gạch Cu<sub>2</sub>O với Cu(OH)<sub>2</sub>/OH<sup>−</sup> khi đun nóng. Ketone thông thường không cho các phản ứng này.</p><div class="reaction"><span class="chem">RCHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]OH</span><span class="arrow">⟶</span><span class="chem">RCOONH<sub>4</sub> + 2Ag↓ + 3NH<sub>3</sub> + H<sub>2</sub>O</span></div>`},
        {title:'Iodoform và an toàn',body:`<div class="reaction"><span class="chem">CH<sub>3</sub>CO–R + 3I<sub>2</sub> + 4NaOH</span><span class="arrow">⟶</span><span class="chem">RCOONa + 3NaI + CHI<sub>3</sub>↓ + 3H<sub>2</sub>O</span></div><div class="safety">HCN cực độc; phản ứng cộng HCN chỉ được trình bày bằng sơ đồ lí thuyết, không mô phỏng thao tác.</div>`}
      ]
    },
    {
      id:'acid', no:'05', title:'Carboxylic acid', color:'#ffbd59', image:'assets/images/topic-acid.webp', time:28,
      tagline:'Kết nối nhóm –COOH với tính acid, ester hóa và ứng dụng đời sống.',
      goals:['Nhận diện và gọi tên nhóm –COOH','Viết phản ứng thể hiện tính acid','Giải thích độ tan và nhiệt độ sôi','Mô tả ester hóa và lên men giấm'],
      sections:[
        {title:'Khái niệm và danh pháp',body:`<p>Carboxylic acid chứa nhóm <span class="chem">–COOH</span>. Với acid đơn chức, công thức là <span class="chem">R–COOH</span>, trong đó R là H hoặc gốc hydrocarbon.</p><div class="formula-box">Acid no, đơn chức, mạch hở: C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub> (n ≥ 1). Carbon của –COOH luôn là carbon số 1.</div>`},
        {title:'Cấu tạo và tính chất vật lí',body:`<p>Nhóm –COOH gồm carbonyl và hydroxyl. Ion carboxylate bền nhờ cộng hưởng nên acid carboxylic thể hiện tính acid. Acid mạch ngắn tan tốt trong nước; độ tan giảm nhanh khi gốc hydrocarbon dài.</p>`},
        {title:'Tính acid',body:`<p>Acid carboxylic phản ứng với kim loại đứng trước H, oxide base, base, carbonate và hydrogencarbonate.</p><div class="reaction"><span class="chem">2RCOOH + Na<sub>2</sub>CO<sub>3</sub></span><span class="arrow">⟶</span><span class="chem">2RCOONa + CO<sub>2</sub>↑ + H<sub>2</sub>O</span></div>`},
        {title:'Phản ứng ester hóa',body:`<div class="reaction"><span class="chem">RCOOH + R′OH</span><span class="arrow">⇌<small>H<sub>2</sub>SO<sub>4</sub> đặc, đun nóng</small></span><span class="chem">RCOOR′ + H<sub>2</sub>O</span></div><p>Ester hóa là phản ứng thuận nghịch; điều kiện phải được ghi rõ.</p>`},
        {title:'Điều chế và an toàn',body:`<div class="reaction"><span class="chem">C<sub>2</sub>H<sub>5</sub>OH + O<sub>2</sub></span><span class="arrow">⟶<small>vi khuẩn acetic</small></span><span class="chem">CH<sub>3</sub>COOH + H<sub>2</sub>O</span></div><div class="safety">Không nếm hóa chất. “Vị chua” không phải cách nhận biết trong phòng thí nghiệm.</div>`}
      ]
    }
  ];

  const questions = [
    {id:'h1',topic:'halogen',skill:'Nhận diện',q:'Chất nào là dẫn xuất halogen của hydrocarbon?',opts:['HIO<sub>4</sub>','C<sub>3</sub>H<sub>3</sub>N','CH<sub>2</sub>BrCl','C<sub>6</sub>H<sub>6</sub>O'],a:2,why:'CH₂BrCl thu được khi thay hai H của methane bằng Br và Cl.'},
    {id:'h2',topic:'halogen',skill:'Phân loại',q:'Bậc dẫn xuất halogen nào không tồn tại?',opts:['Bậc I','Bậc II','Bậc III','Bậc IV'],a:3,why:'Carbon liên kết với X còn phải có một liên kết dành cho X nên tối đa chỉ liên kết với ba carbon khác.'},
    {id:'h3',topic:'halogen',skill:'Điều kiện phản ứng',q:'Điều kiện ưu tiên tạo alcohol từ dẫn xuất halogen có X gắn vào carbon no là?',opts:['KOH trong ethanol, đun nóng','NaOH dung dịch, đun nóng','H<sub>2</sub>SO<sub>4</sub> đặc, 170 °C','Nước bromine'],a:1,why:'Kiềm nước thuận lợi cho phản ứng thế X bằng –OH; kiềm trong ethanol ưu tiên phản ứng tách.'},
    {id:'h4',topic:'halogen',skill:'Vận dụng',q:'Trong bốn thí nghiệm: (a) benzyl chloride + NaOH(aq); (b) 1-chloropropane + KOH/ethanol; (c) 1-chloropropane + NaOH(aq); (d) CH<sub>3</sub>CHClCH=CH<sub>2</sub> + KOH/ethanol, có bao nhiêu thí nghiệm tạo alcohol là sản phẩm chính?',opts:['1','2','3','4'],a:1,why:'(a) và (c) là phản ứng thế trong kiềm nước. (b) và (d) là phản ứng tách trong KOH/ethanol.'},
    {id:'h5',topic:'halogen',skill:'Đồng phân',q:'Chất nào có khả năng có đồng phân hình học?',opts:['CH<sub>2</sub>=CHCl','CH<sub>2</sub>=CHCH<sub>2</sub>Br','CH<sub>3</sub>CH=CFCH<sub>3</sub>','(CH<sub>3</sub>)<sub>2</sub>C=CHI'],a:2,why:'Mỗi carbon của liên kết đôi trong CH₃CH=CFCH₃ gắn với hai nhóm khác nhau.'},
    {id:'a1',topic:'alcohol',skill:'Khái niệm',q:'Trong alcohol, nhóm –OH liên kết trực tiếp với loại carbon nào?',opts:['Carbon của vòng benzene','Carbon no','Carbon của nhóm carbonyl','Bất kỳ carbon nào'],a:1,why:'Theo định nghĩa phổ thông, nhóm –OH của alcohol phải gắn trực tiếp với carbon no.'},
    {id:'a2',topic:'alcohol',skill:'Phân loại',q:'Chất nào không phải alcohol?',opts:['CH<sub>3</sub>CH<sub>2</sub>OH','CH<sub>2</sub>=CHCH<sub>2</sub>OH','C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH','C<sub>6</sub>H<sub>5</sub>OH'],a:3,why:'C₆H₅OH là phenol vì –OH gắn trực tiếp với carbon vòng benzene.'},
    {id:'a3',topic:'alcohol',skill:'Đồng phân',q:'C<sub>4</sub>H<sub>10</sub>O có bao nhiêu đồng phân cấu tạo là alcohol?',opts:['2','3','4','5'],a:2,why:'Có butan-1-ol, butan-2-ol, 2-methylpropan-1-ol và 2-methylpropan-2-ol.'},
    {id:'a4',topic:'alcohol',skill:'Phương trình',q:'Sản phẩm khí trong phản ứng R(OH)<sub>a</sub> + aNa là?',opts:['aH<sub>2</sub>','a/2 H<sub>2</sub>','2a H<sub>2</sub>','O<sub>2</sub>'],a:1,why:'Hai nguyên tử H của hai nhóm –OH tạo một phân tử H₂, nên hệ số là a/2.'},
    {id:'a5',topic:'alcohol',skill:'Oxi hóa',q:'Oxi hóa không hoàn toàn alcohol bậc II bằng CuO, đun nóng, thu được?',opts:['Aldehyde','Ketone','Carboxylic acid','Alkene'],a:1,why:'Alcohol bậc II tách hai H tạo ketone; alcohol bậc I tạo aldehyde.'},
    {id:'p1',topic:'phenol',skill:'Nhận diện',q:'Chất nào là phenol?',opts:['C<sub>6</sub>H<sub>5</sub>OH','C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH','C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>','C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>'],a:0,why:'Phenol có –OH gắn trực tiếp với carbon của vòng benzene.'},
    {id:'p2',topic:'phenol',skill:'Tính acid',q:'Thứ tự tính acid giảm dần đúng là?',opts:['Alcohol > phenol > H<sub>2</sub>CO<sub>3</sub>','H<sub>2</sub>CO<sub>3</sub> > phenol > alcohol','Phenol > H<sub>2</sub>CO<sub>3</sub> > alcohol','H<sub>2</sub>CO<sub>3</sub> > alcohol > phenol'],a:1,why:'Phenol acid hơn alcohol nhưng yếu hơn carbonic acid (nấc 1).'},
    {id:'p3',topic:'phenol',skill:'Hiện tượng',q:'Cho phenol vào nước bromine, hiện tượng đúng là?',opts:['Không phản ứng','Khí thoát ra','Mất màu và có kết tủa trắng','Xuất hiện màu xanh lam'],a:2,why:'Tạo 2,4,6-tribromophenol là kết tủa trắng và nước bromine mất màu.'},
    {id:'p4',topic:'phenol',skill:'Phản ứng',q:'Trong các dung dịch NaOH, NaHCO<sub>3</sub>, HCl, NaNO<sub>3</sub>, Br<sub>2</sub>(aq), có bao nhiêu dung dịch phản ứng rõ với phenol ở phạm vi phổ thông?',opts:['1','2','3','4'],a:1,why:'Phenol phản ứng với NaOH và Br₂(aq); không phản ứng rõ với NaHCO₃, HCl hay NaNO₃.'},
    {id:'p5',topic:'phenol',skill:'Sản phẩm',q:'Sản phẩm thế chính khi cho dư nước bromine tác dụng với phenol là?',opts:['Bromobenzene','2-bromophenol','4-bromophenol','2,4,6-tribromophenol'],a:3,why:'Nhóm –OH hoạt hóa mạnh vòng benzene tại các vị trí ortho và para nên tạo 2,4,6-tribromophenol.'},
    {id:'c1',topic:'carbonyl',skill:'Nhóm chức',q:'Nhóm chức đặc trưng của aldehyde là?',opts:['–COOH','–CHO','–OH','–COO–'],a:1,why:'Aldehyde chứa nhóm –CHO ở đầu mạch.'},
    {id:'c2',topic:'carbonyl',skill:'Nhận diện',q:'Chất nào là aldehyde?',opts:['CH<sub>2</sub>=CHCH<sub>2</sub>OH','CH<sub>2</sub>=CHCHO','CH<sub>2</sub>=CHCOOH','CH<sub>2</sub>=CHCOOCH<sub>3</sub>'],a:1,why:'CH₂=CHCHO chứa nhóm –CHO và có tên prop-2-enal.'},
    {id:'c3',topic:'carbonyl',skill:'Thuốc thử',q:'Thuốc thử nào dùng để phân biệt aldehyde với ketone thông thường?',opts:['Thuốc thử Tollens','Dung dịch NaCl','Quỳ tím','Dung dịch KNO<sub>3</sub>'],a:0,why:'Aldehyde tạo Ag với thuốc thử Tollens, ketone thông thường không phản ứng.'},
    {id:'c4',topic:'carbonyl',skill:'Chất khử',q:'Chất khử nào được ghi đúng để khử nhóm carbonyl?',opts:['NaAlH<sub>4</sub>','LiAlH<sub>4</sub>','AlCl<sub>3</sub>','NaCl'],a:1,why:'LiAlH₄ và NaBH₄ là các chất khử thường dùng; NaAlH₄ là ký hiệu sai trong nguồn ban đầu.'},
    {id:'c5',topic:'carbonyl',skill:'Sản phẩm',q:'Khử 3-methylbutan-2-one thu được?',opts:['3-methylbutanal','3-methylbutan-1-ol','3-methylbutan-2-ol','2-methylbutanoic acid'],a:2,why:'Khử ketone tạo alcohol bậc II, giữ nguyên khung carbon.'},
    {id:'x1',topic:'acid',skill:'Công thức',q:'Công thức chung của acid no, đơn chức, mạch hở là?',opts:['C<sub>n</sub>H<sub>2n+2</sub>O','C<sub>n</sub>H<sub>2n</sub>O','C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub>','C<sub>n</sub>H<sub>2n-2</sub>O<sub>2</sub>'],a:2,why:'Acid no, đơn chức, mạch hở có dạng R–COOH và công thức CₙH₂ₙO₂.'},
    {id:'x2',topic:'acid',skill:'Danh pháp',q:'Tên thay thế của CH<sub>3</sub>CH<sub>2</sub>COOH là?',opts:['Ethanoic acid','Propanoic acid','Butanoic acid','Propanal'],a:1,why:'Mạch chính tính cả carbon –COOH có ba carbon: propanoic acid.'},
    {id:'x3',topic:'acid',skill:'Danh pháp',q:'Tên thay thế của (CH<sub>3</sub>)<sub>2</sub>CHCOOH là?',opts:['2-methylpropanoic acid','3-methylpropanoic acid','2-methylbutanoic acid','Butan-2-oic acid'],a:0,why:'Mạch chính có ba carbon; nhánh methyl ở carbon số 2.'},
    {id:'x4',topic:'acid',skill:'Đời sống',q:'500 mL giấm 5% thể tích chứa bao nhiêu mL acetic acid?',opts:['5 mL','20 mL','25 mL','50 mL'],a:2,why:'V = 500 × 5/100 = 25 mL.'},
    {id:'x5',topic:'acid',skill:'Phản ứng',q:'Sản phẩm khí khi CH<sub>3</sub>COOH phản ứng với NaHCO<sub>3</sub> là?',opts:['H<sub>2</sub>','O<sub>2</sub>','CO<sub>2</sub>','CH<sub>4</sub>'],a:2,why:'Acid phản ứng hydrogencarbonate tạo muối, CO₂ và H₂O.'}
  ];

  const matches = [
    {l:'CH<sub>3</sub>CH<sub>2</sub>OH',r:'Ethanol',topic:'alcohol'},
    {l:'C<sub>6</sub>H<sub>5</sub>OH',r:'Phenol',topic:'phenol'},
    {l:'CH<sub>3</sub>CHO',r:'Ethanal',topic:'carbonyl'},
    {l:'CH<sub>3</sub>COCH<sub>3</sub>',r:'Propanone',topic:'carbonyl'},
    {l:'CH<sub>3</sub>CH<sub>2</sub>COOH',r:'Propanoic acid',topic:'acid'},
    {l:'CH<sub>2</sub>=CHCH<sub>2</sub>OH',r:'Prop-2-en-1-ol',topic:'alcohol'}
  ];

  const classifications = [
    {f:'CH<sub>3</sub>CH<sub>2</sub>Cl',z:'Dẫn xuất halogen'},
    {f:'CH<sub>3</sub>CH<sub>2</sub>OH',z:'Alcohol'},
    {f:'C<sub>6</sub>H<sub>5</sub>OH',z:'Phenol'},
    {f:'CH<sub>3</sub>CHO',z:'Carbonyl'},
    {f:'CH<sub>3</sub>COOH',z:'Carboxylic acid'},
    {f:'CH<sub>3</sub>COCH<sub>3</sub>',z:'Carbonyl'},
    {f:'C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH',z:'Alcohol'},
    {f:'CH<sub>2</sub>BrCl',z:'Dẫn xuất halogen'}
  ];
  return {modules, questions, matches, classifications};
})();
