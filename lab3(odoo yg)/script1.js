var events = [
    {'Date': new Date(2021, 0, 1), 'Title': 'Сайхан амарна'},
    {'Date': new Date(2021, 1, 1), 'Title': 'Сагсны тэмцээнтэй'},
    {'Date': new Date(2021, 1, 3), 'Title': 'Шагнал гардуулна даа'},
    {'Date': new Date(2021, 1, 17), 'Title': 'Жавхлан багшийн лаб 2-ыг хийнэ'},
    {'Date': new Date(2021, 2, 2), 'Title': 'Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ'},
    {'Date': new Date(2021, 2, 6), 'Title': 'Энд юу бичье дээ байз'},
    {'Date': new Date(2021, 2, 8), 'Title': 'Эмэгтэйчүүддээ баяр хүргэнэ дээ'},
    {'Date': new Date(2021, 3, 1), 'Title': 'Бүгдээрээ худлаа ярьцаагаагаарай'},
    {'Date': new Date(2021, 4, 10), 'Title': 'Энэ сард ч ёстой юу ч болдоггүй сар даа'},
    {'Date': new Date(2021, 5, 6), 'Title': 'Жавхлан багшийн төрсөн өдөр'},
    {'Date': new Date(2021, 6, 4), 'Title': 'Хичээл амарсаан ураа'},
    {'Date': new Date(2021, 7, 1), 'Title': 'Хөдөө явдаг цаг даа'},
    {'Date': new Date(2021, 7, 25), 'Title': 'Хичээл сонголт эхэллээ'},
    {'Date': new Date(2021, 8, 1), 'Title': '9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа'},
    {'Date': new Date(2021, 9, 13), 'Title': 'Сур сур бас дахин сур'},
    {'Date': new Date(2021, 10, 2), 'Title': 'Сурсаар л бай'},
    {'Date': new Date(2021, 11, 20), 'Title': 'Өвлийн семистер хаагдах нь дээ'},
    {'Date': new Date(2021, 11, 30), 'Title': 'Дүн гаргаж дууслаа баярлалаа баяртай'},
  ];
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);
  