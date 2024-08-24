var map = L.map('map').setView([16.4734, 102.824], 14); // พิกัดในมหาวิทยาลัยขอนแก่น
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
var stations = {
    "7-11 หลังหอ 8":[16.480184, 102.811889],
    "Complex":[16.477264, 102.823369],
    "Golden Living":[16.480341, 102.810397],
    "JK เครื่องเขียน":[16.463436, 102.827538],
    "KKBS":[16.474502, 102.825405],
    "YOUR SMILE":[16.458498, 102.828014],
    "กาแฟเด้อหล่า":[16.476954, 102.825863],
    "เกษียรสินธุ์ปาร์ค":[16.484311, 102.818122],
    "คณะเกษตรศาสตร์1":[16.474451, 102.820614],
    "คณะเกษตรศาสตร์1":[16.476046, 102.822668],
    "คณะเกษตรศาสตร์2":[16.476057, 102.819856],
    "คณะเกษตรศาสตร์3":[16.477212, 102.821758],
    "คณะทันตแพทยศาสตร์":[16.466488, 102.827986],
    "คณะเทคนิคการแพทย์":[16.466713, 102.828181],
    "คณะเทคโนโลยี2":[16.473541, 102.821990],
    "คณะเทศโนโลยี1":[16.474319, 102.820673],
    "คณะนิติศาสตร์":[16.449944, 102.815529],
    "คณะพยาบาลศาสตร์":[16.470034, 102.824665],
    "คณะแพทย์ศาสตร์":[16.470477, 102.828068],
    "คณะเภสัชศาสตร์1":[16.470640, 102.827987],
    "คณะเภสัชศาสตร์2":[16.471072, 102.827325],
    "คณะมนุษยศาสตร์และสังคมศาสตร์":[16.476594, 102.826981],
    "คณะวิทยาศาสตร์":[16.475032, 102.825077],
    "คณะวิศวกรรมศาสตร์1":[16.471039, 102.824350],
    "คณะวิศวะกรรมศสตร์2":[16.471142, 102.822993],
    "คณะศิลปกรรมศาสตร์":[16.468990, 102.816923],
    "คณะศึกษาศาสตร์":[16.472805, 102.827961],
    "คณะสถาปัตยกรรมศาสตร์":[16.472300, 102.828045],
    "คณะสัตวแพทยศาสตร์":[16.478239, 102.831967],
    "ครัวโอมหมูกรอบ":[16.485139, 102.816266],
    "คอมเพล็กซ์":[16.477264, 102.823369],
    "คุ้มศรีฐาน":[16.445187, 102.812636],
    "เคี้ยงหลังมอ":[16.483321, 102.816261],
    "ตรงข้ามอาคารสิริคุณากร":[16.469869, 102.816477],
    "ที่พักญาติ":[16.476117, 102.812641],
    "บ้านพักสบาย":[16.485139, 102.816266],
    "บ้านสวนมอ":[16.480251, 102.805194],
    "บึงหนองแวงตราชู":[16.459100, 102.828139],
    "ปตท.":[16.478381, 102.814011],
    "ประตูกังสดาล":[16.465403, 102.827794],
    "ประตูเจ้าพ่อมอ":[16.476024, 102.831253],
    "ประตูศรีฐาน":[16.442518, 102.814827],
    "พิพิธภัณฑ์ธรรมชาติวิทยา":[16.445830, 102.811494],
    "พิมานคอนโด":[16.482990, 102.819185],
    "แฟลต14":[16.465868, 102.828321],
    "แฟลตป่าดู่1":[16.455548, 102.812846],
    "แฟลตป่าดู่2":[16.454991, 102.815182],
    "แฟลตศูนย์แพทย์":[16.467937, 102.823719],
    "ร้านชบา":[16.481730, 102.815997],
    "ร้านพรพระ":[16.460849, 102.827959],
    "ร้านพู่กันเครื่องเขียน":[16.479871, 102.814776],
    "โรงชาย":[16.477693, 102.819749],
    "โรงพยาบาลศรีนครินทร์":[16.467199, 102.830746],
    "โรงพิมพ์":[16.472255, 102.821634],
    "โรงยิมเก่า":[16.477634, 102.818686],
    "โรงเรียนสาธิตมหาวิทยาลัยขอนแก่น":[16.449931, 102.815640],
    "โรงเรียนสาธิตมอดินแดง":[16.481205, 102.831749],
    "โรงแรมบายาสิตา":[16.477508, 102.831952],
    "โรงอาหาร U-center":[16.479864, 102.818881],
    "โรงอาหารคณะพยาบาล":[16.470127, 102.824592],
    "โรงอาหารหนองแวง":[16.465594, 102.825733],
    "ลานจอดรถหอพัก 8 หลัง":[16.479435, 102.808442],
    "ลานจอรถอุทยานการเกษตร":[16.468866, 102.815840],
    "วงเวียนศูนย์หัวใจสิริกิติ์":[16.465814, 102.829367],
    "วิทยาลัยปกครองท้องถิ่น":[16.473673, 102.831690],
    "วิมานดิน":[16.480739, 102.807144],
    "ศาลเจ้าพ่อมอ":[16.476920, 102.831977],
    "ศูนย์ประชุมกาญจนาภิเษก":[16.446665, 102.815143],
    "ศูนย์รถมอเตอร์ไซไฟฟ้า":[16.475403, 102.828167],
    "ศูนย์หัวใจสิริกิติ์":[16.466279, 102.830641],
    "สถาบันขงจื่อ":[16.474521, 102.830126],
    "สถาบันลุ่มน้ำโขง":[16.474368, 102.828210],
    "สนามยิงปืน":[16.477710, 102.818019],
    "สนามรักบี้":[16.475243, 102.815944],
    "สระพลาสติก":[16.475568, 102.817674],
    "หน้าอาคารสิริคุณากร":[16.469887, 102.816219],
    "หมู่บ้านศูนย์แพทย์":[16.467540, 102.821613],
    "หมู่บ้านศูนย์แพทย์1":[16.469421, 102.822382],
    "หมู่บ้านศูนย์แพทย์4":[16.468935, 102.821268],
    "หอในชาย 8":[16.477864, 102.818209],
    "หอในชาย 9":[16.479122, 102.818270],
    "หอพัก 8 หลัง":[16.478771, 102.810154],
    "หอพักนักศึกษาพยาบาล":[16.468423, 102.817477],
    "หอพักนักศึกษาแพทย์":[16.470929, 102.823482],
    "หอพักมอแดงเพลส":[16.480014, 102.815649],
    "หอศิลป์":[16.444504, 102.814721],
    "หอศิลป์":[16.4705,102.8224],
    "หอสมุดมหาวิทยาลัยขอนแก่น":[16.477075, 102.822994],
    "หออินเตอร์":[16.478637, 102.811939],
    "อาคารจอดรถสถานีชาร์จไฟฟ้า":[16.466036, 102.807785],
    "อาคารสิริคุณากร":[16.469552, 102.815702],
    "อุทยานการเกษตร1":[16.466404, 102.815469],
    "อุทยานการเกษตร2":[16.466749, 102.815335],
};

// จุดที่บังคับให้ผ่าน
var mandatoryStops = ["อาคารสิริคุณากร","หมู่บ้านศูนย์แพทย์"];

for (var key in stations) {
    L.marker(stations[key]).addTo(map).bindPopup(key);
}

var routingControl;

function calculateRoute() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    var startCoords = stations[start];
    var endCoords = stations[end];
    
    if (startCoords && endCoords) {
        // สร้างรายการ waypoints
        var waypoints = [L.latLng(startCoords[0], startCoords[1])];
        
        // เพิ่มจุดบังคับลงใน waypoints
        for (var i = 0; i < mandatoryStops.length; i++) {
            var stopCoords = stations[mandatoryStops[i]];
            if (stopCoords) {
                waypoints.push(L.latLng(stopCoords[0], stopCoords[1]));
            }
        }
        
        // เพิ่มจุดหมายปลายทางลงใน waypoints
        waypoints.push(L.latLng(endCoords[0], endCoords[1]));

        if (routingControl) {
            map.removeControl(routingControl);
        }
        
        routingControl = L.Routing.control({
            waypoints: waypoints,
            routeWhileDragging: true,
            addWaypoints: false // ป้องกันการเพิ่มจุดเพิ่มเติมจากผู้ใช้
        }).addTo(map);
         routingControl.on('routesfound', function(e) {
            var routes = e.routes;
            var summary = routes[0].summary;
            
            // แสดงข้อความที่ต้องการ
            alert('ขึ้นรถสายสีแดง ลงรถที่จุดเกษตรศาสตร์2 ขึ้นรถสายสีเขียว');
        });
    }
}
