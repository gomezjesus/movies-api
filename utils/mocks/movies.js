const moviesMock = [
  {
    id: 'b378ca07-522c-4799-a8b8-aff3faddd840',
    title: 'Conquest of Space',
    year: 2004,
    cover: 'http://dummyimage.com/192x244.bmp/dddddd/000000',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 23,
    contentRating: 'NC-17',
    source:
      'https://google.com.br/mauris/enim.png?fusce=nulla&posuere=nisl&felis=nunc&sed=nisl&lacus=duis&morbi=bibendum&sem=felis&mauris=sed&laoreet=interdum&ut=venenatis&rhoncus=turpis&aliquet=enim&pulvinar=blandit&sed=mi&nisl=in&nunc=porttitor&rhoncus=pede&dui=justo&vel=eu&sem=massa&sed=donec&sagittis=dapibus&nam=duis&congue=at&risus=velit&semper=eu&porta=est&volutpat=congue&quam=elementum&pede=in&lobortis=hac&ligula=habitasse&sit=platea&amet=dictumst&eleifend=morbi&pede=vestibulum&libero=velit&quis=id&orci=pretium&nullam=iaculis&molestie=diam&nibh=erat&in=fermentum&lectus=justo&pellentesque=nec&at=condimentum&nulla=neque&suspendisse=sapien&potenti=placerat&cras=ante&in=nulla&purus=justo&eu=aliquam&magna=quis',
    tags: ['Romance|Thriller']
  },
  {
    id: '7b04b599-ef55-419e-8adf-a35d199f854c',
    title: 'East Meets West (Dung sing sai tsau 2011)',
    year: 2008,
    cover: 'http://dummyimage.com/249x225.bmp/cc0000/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 79,
    contentRating: 'PG-13',
    source:
      'http://statcounter.com/consequat/nulla/nisl.aspx?sit=eget&amet=tincidunt&eleifend=eget&pede=tempus&libero=vel&quis=pede&orci=morbi&nullam=porttitor&molestie=lorem&nibh=id&in=ligula&lectus=suspendisse&pellentesque=ornare&at=consequat&nulla=lectus&suspendisse=in&potenti=est&cras=risus&in=auctor&purus=sed&eu=tristique&magna=in&vulputate=tempus&luctus=sit&cum=amet&sociis=sem&natoque=fusce&penatibus=consequat&et=nulla&magnis=nisl&dis=nunc&parturient=nisl&montes=duis&nascetur=bibendum&ridiculus=felis&mus=sed&vivamus=interdum&vestibulum=venenatis&sagittis=turpis&sapien=enim&cum=blandit&sociis=mi&natoque=in&penatibus=porttitor&et=pede&magnis=justo&dis=eu&parturient=massa&montes=donec&nascetur=dapibus&ridiculus=duis&mus=at&etiam=velit&vel=eu&augue=est&vestibulum=congue&rutrum=elementum&rutrum=in&neque=hac&aenean=habitasse&auctor=platea',
    tags: ['Drama|Western']
  },
  {
    id: '3fb26ce3-a93c-453e-9a2a-8131cc8e64cf',
    title: 'Un Piede in paradiso',
    year: 1996,
    cover: 'http://dummyimage.com/198x172.bmp/5fa2dd/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 55,
    contentRating: 'G',
    source:
      'https://telegraph.co.uk/vestibulum/sit/amet/cursus/id/turpis.jsp?augue=nunc&quam=nisl&sollicitudin=duis&vitae=bibendum&consectetuer=felis&eget=sed&rutrum=interdum&at=venenatis&lorem=turpis&integer=enim&tincidunt=blandit&ante=mi&vel=in&ipsum=porttitor&praesent=pede&blandit=justo&lacinia=eu&erat=massa&vestibulum=donec&sed=dapibus&magna=duis&at=at&nunc=velit&commodo=eu&placerat=est&praesent=congue&blandit=elementum&nam=in&nulla=hac&integer=habitasse&pede=platea&justo=dictumst&lacinia=morbi&eget=vestibulum&tincidunt=velit&eget=id&tempus=pretium&vel=iaculis&pede=diam&morbi=erat&porttitor=fermentum&lorem=justo&id=nec&ligula=condimentum&suspendisse=neque&ornare=sapien',
    tags: [
      '(no genres listed)',
      'Comedy|Documentary',
      'Comedy|Drama',
      'Drama',
      'Action|Fantasy|Sci-Fi'
    ]
  },
  {
    id: 'b7a4a9a8-404a-4eb9-ac17-41ceabfd707c',
    title: 'Woman on Top',
    year: 1985,
    cover: 'http://dummyimage.com/204x126.bmp/cc0000/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 63,
    contentRating: 'G',
    source:
      'http://amazon.co.uk/praesent/blandit/lacinia/erat/vestibulum/sed.jpg?molestie=pede&sed=morbi&justo=porttitor&pellentesque=lorem&viverra=id&pede=ligula&ac=suspendisse&diam=ornare&cras=consequat&pellentesque=lectus&volutpat=in&dui=est&maecenas=risus&tristique=auctor&est=sed&et=tristique&tempus=in&semper=tempus&est=sit&quam=amet&pharetra=sem&magna=fusce&ac=consequat&consequat=nulla&metus=nisl&sapien=nunc&ut=nisl&nunc=duis&vestibulum=bibendum&ante=felis&ipsum=sed&primis=interdum&in=venenatis&faucibus=turpis&orci=enim&luctus=blandit&et=mi&ultrices=in&posuere=porttitor&cubilia=pede&curae=justo&mauris=eu&viverra=massa&diam=donec&vitae=dapibus&quam=duis&suspendisse=at&potenti=velit&nullam=eu&porttitor=est&lacus=congue&at=elementum&turpis=in&donec=hac&posuere=habitasse&metus=platea&vitae=dictumst&ipsum=morbi&aliquam=vestibulum&non=velit&mauris=id&morbi=pretium&non=iaculis&lectus=diam&aliquam=erat&sit=fermentum&amet=justo&diam=nec&in=condimentum&magna=neque&bibendum=sapien&imperdiet=placerat&nullam=ante&orci=nulla&pede=justo&venenatis=aliquam&non=quis&sodales=turpis&sed=eget&tincidunt=elit&eu=sodales&felis=scelerisque&fusce=mauris',
    tags: [
      'Comedy|Drama',
      'Action|Adventure|Drama|Fantasy',
      'Animation|Drama|Romance|Sci-Fi',
      'Drama|Romance',
      'Horror|Mystery|Thriller'
    ]
  },
  {
    id: '312c5fe2-1bad-47af-aae7-abf2fb1243fe',
    title: 'Season For Assassins',
    year: 2012,
    cover: 'http://dummyimage.com/128x140.bmp/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 72,
    contentRating: 'NC-17',
    source:
      'http://stumbleupon.com/pellentesque/at/nulla.html?nisl=massa&nunc=tempor&rhoncus=convallis&dui=nulla&vel=neque&sem=libero&sed=convallis&sagittis=eget&nam=eleifend&congue=luctus&risus=ultricies&semper=eu&porta=nibh&volutpat=quisque&quam=id&pede=justo&lobortis=sit&ligula=amet&sit=sapien&amet=dignissim&eleifend=vestibulum&pede=vestibulum&libero=ante&quis=ipsum&orci=primis&nullam=in&molestie=faucibus&nibh=orci&in=luctus&lectus=et&pellentesque=ultrices&at=posuere&nulla=cubilia&suspendisse=curae&potenti=nulla&cras=dapibus&in=dolor&purus=vel&eu=est&magna=donec&vulputate=odio&luctus=justo&cum=sollicitudin&sociis=ut&natoque=suscipit&penatibus=a&et=feugiat&magnis=et&dis=eros&parturient=vestibulum&montes=ac&nascetur=est&ridiculus=lacinia&mus=nisi&vivamus=venenatis&vestibulum=tristique',
    tags: ['Drama|Thriller', 'Drama']
  },
  {
    id: '71fe7f3e-3cc4-4824-9364-ded980b1f55f',
    title: "Taste of Cherry (Ta'm e guilass)",
    year: 1992,
    cover: 'http://dummyimage.com/136x124.bmp/ff4444/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 5,
    contentRating: 'PG-13',
    source:
      'https://sfgate.com/quam/pede/lobortis.js?sapien=blandit&ut=ultrices&nunc=enim&vestibulum=lorem&ante=ipsum&ipsum=dolor&primis=sit&in=amet&faucibus=consectetuer&orci=adipiscing&luctus=elit&et=proin&ultrices=interdum&posuere=mauris&cubilia=non&curae=ligula&mauris=pellentesque&viverra=ultrices&diam=phasellus&vitae=id&quam=sapien&suspendisse=in&potenti=sapien&nullam=iaculis&porttitor=congue&lacus=vivamus&at=metus&turpis=arcu&donec=adipiscing&posuere=molestie&metus=hendrerit&vitae=at&ipsum=vulputate&aliquam=vitae&non=nisl&mauris=aenean&morbi=lectus&non=pellentesque&lectus=eget&aliquam=nunc&sit=donec&amet=quis&diam=orci&in=eget&magna=orci&bibendum=vehicula&imperdiet=condimentum&nullam=curabitur&orci=in&pede=libero&venenatis=ut&non=massa&sodales=volutpat&sed=convallis&tincidunt=morbi&eu=odio&felis=odio&fusce=elementum&posuere=eu&felis=interdum&sed=eu&lacus=tincidunt&morbi=in&sem=leo&mauris=maecenas&laoreet=pulvinar&ut=lobortis&rhoncus=est&aliquet=phasellus&pulvinar=sit&sed=amet&nisl=erat&nunc=nulla&rhoncus=tempus&dui=vivamus&vel=in&sem=felis&sed=eu&sagittis=sapien&nam=cursus&congue=vestibulum&risus=proin&semper=eu',
    tags: [
      'Comedy|Drama',
      'Crime|Drama|Thriller',
      'Horror|Mystery|Thriller',
      'Action|Crime|Drama|Thriller',
      'Action|Adventure|Comedy|Sci-Fi|Thriller'
    ]
  },
  {
    id: '36b80b33-b788-4c7a-a039-0dd23a178d9e',
    title: 'Tell Them Anything You Want: A Portrait of Maurice Sendak',
    year: 2013,
    cover: 'http://dummyimage.com/166x181.bmp/5fa2dd/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 85,
    contentRating: 'PG',
    source:
      'https://elegantthemes.com/convallis/nunc/proin/at.jsp?est=nullam&phasellus=orci&sit=pede&amet=venenatis&erat=non&nulla=sodales&tempus=sed&vivamus=tincidunt&in=eu&felis=felis&eu=fusce&sapien=posuere&cursus=felis&vestibulum=sed&proin=lacus&eu=morbi&mi=sem&nulla=mauris&ac=laoreet&enim=ut&in=rhoncus&tempor=aliquet&turpis=pulvinar&nec=sed&euismod=nisl&scelerisque=nunc&quam=rhoncus&turpis=dui&adipiscing=vel&lorem=sem&vitae=sed&mattis=sagittis&nibh=nam&ligula=congue&nec=risus&sem=semper&duis=porta&aliquam=volutpat&convallis=quam&nunc=pede&proin=lobortis&at=ligula&turpis=sit&a=amet&pede=eleifend&posuere=pede&nonummy=libero&integer=quis&non=orci&velit=nullam&donec=molestie&diam=nibh&neque=in&vestibulum=lectus&eget=pellentesque&vulputate=at&ut=nulla&ultrices=suspendisse&vel=potenti&augue=cras&vestibulum=in&ante=purus&ipsum=eu&primis=magna&in=vulputate&faucibus=luctus&orci=cum&luctus=sociis&et=natoque&ultrices=penatibus&posuere=et&cubilia=magnis&curae=dis&donec=parturient&pharetra=montes&magna=nascetur&vestibulum=ridiculus&aliquet=mus&ultrices=vivamus&erat=vestibulum&tortor=sagittis&sollicitudin=sapien&mi=cum&sit=sociis&amet=natoque&lobortis=penatibus&sapien=et&sapien=magnis&non=dis&mi=parturient',
    tags: ['Crime|Drama|Horror|Thriller']
  },
  {
    id: '40ba77a5-15f7-4392-884e-78c8867c7c2c',
    title: 'Runaway',
    year: 1997,
    cover: 'http://dummyimage.com/214x206.png/ff4444/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 14,
    contentRating: 'R',
    source:
      'http://cbc.ca/convallis/eget/eleifend.json?sollicitudin=amet&ut=erat&suscipit=nulla&a=tempus&feugiat=vivamus&et=in&eros=felis&vestibulum=eu&ac=sapien&est=cursus&lacinia=vestibulum&nisi=proin&venenatis=eu&tristique=mi&fusce=nulla&congue=ac&diam=enim&id=in&ornare=tempor&imperdiet=turpis&sapien=nec&urna=euismod&pretium=scelerisque&nisl=quam&ut=turpis&volutpat=adipiscing&sapien=lorem&arcu=vitae&sed=mattis&augue=nibh&aliquam=ligula&erat=nec&volutpat=sem&in=duis&congue=aliquam&etiam=convallis&justo=nunc&etiam=proin&pretium=at&iaculis=turpis&justo=a&in=pede&hac=posuere&habitasse=nonummy&platea=integer&dictumst=non&etiam=velit&faucibus=donec&cursus=diam&urna=neque&ut=vestibulum&tellus=eget',
    tags: ['Crime|Drama|Romance', 'Drama', 'Comedy|Romance']
  },
  {
    id: 'ec70ce7d-f0bb-48d1-88fc-162b2187e688',
    title: 'Stereo',
    year: 1989,
    cover: 'http://dummyimage.com/131x213.jpg/ff4444/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 29,
    contentRating: 'PG-13',
    source:
      'http://ocn.ne.jp/nulla/nunc/purus/phasellus/in.js?faucibus=tempor&orci=convallis&luctus=nulla&et=neque&ultrices=libero&posuere=convallis&cubilia=eget&curae=eleifend&mauris=luctus&viverra=ultricies&diam=eu&vitae=nibh&quam=quisque&suspendisse=id&potenti=justo&nullam=sit&porttitor=amet&lacus=sapien&at=dignissim&turpis=vestibulum&donec=vestibulum&posuere=ante&metus=ipsum&vitae=primis&ipsum=in&aliquam=faucibus&non=orci&mauris=luctus&morbi=et&non=ultrices&lectus=posuere&aliquam=cubilia&sit=curae&amet=nulla&diam=dapibus&in=dolor&magna=vel&bibendum=est&imperdiet=donec&nullam=odio&orci=justo&pede=sollicitudin&venenatis=ut&non=suscipit&sodales=a&sed=feugiat&tincidunt=et&eu=eros&felis=vestibulum&fusce=ac&posuere=est&felis=lacinia&sed=nisi&lacus=venenatis&morbi=tristique&sem=fusce&mauris=congue&laoreet=diam&ut=id&rhoncus=ornare&aliquet=imperdiet&pulvinar=sapien&sed=urna&nisl=pretium&nunc=nisl&rhoncus=ut&dui=volutpat&vel=sapien',
    tags: ['Drama|Mystery|Romance', 'Documentary', 'Comedy', 'Drama']
  },
  {
    id: '51912291-bfed-41b0-a91a-52f183bd8f6e',
    title: 'Against All Odds',
    year: 2000,
    cover: 'http://dummyimage.com/177x124.png/ff4444/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 76,
    contentRating: 'G',
    source:
      'http://ezinearticles.com/nisl/duis.jsp?pede=morbi&morbi=non&porttitor=lectus&lorem=aliquam&id=sit&ligula=amet&suspendisse=diam&ornare=in&consequat=magna&lectus=bibendum&in=imperdiet&est=nullam&risus=orci&auctor=pede&sed=venenatis&tristique=non&in=sodales&tempus=sed&sit=tincidunt&amet=eu&sem=felis&fusce=fusce&consequat=posuere&nulla=felis&nisl=sed&nunc=lacus&nisl=morbi&duis=sem&bibendum=mauris&felis=laoreet&sed=ut&interdum=rhoncus&venenatis=aliquet&turpis=pulvinar&enim=sed&blandit=nisl&mi=nunc&in=rhoncus&porttitor=dui&pede=vel&justo=sem&eu=sed&massa=sagittis&donec=nam&dapibus=congue&duis=risus&at=semper&velit=porta&eu=volutpat&est=quam&congue=pede&elementum=lobortis&in=ligula&hac=sit&habitasse=amet&platea=eleifend&dictumst=pede&morbi=libero&vestibulum=quis&velit=orci&id=nullam&pretium=molestie&iaculis=nibh&diam=in&erat=lectus&fermentum=pellentesque&justo=at&nec=nulla&condimentum=suspendisse&neque=potenti&sapien=cras&placerat=in&ante=purus&nulla=eu&justo=magna&aliquam=vulputate&quis=luctus&turpis=cum&eget=sociis&elit=natoque&sodales=penatibus&scelerisque=et&mauris=magnis&sit=dis&amet=parturient&eros=montes',
    tags: ['Comedy|Romance', 'Comedy']
  }
];

module.exports = {
  moviesMock
};
