/*
 * @Author: IvanLiu
 * @LastEditors: IvanLiu
 * @Date: 2024-11-15 09:45:43
 * @LastEditTime: 2024-12-15 10:36:55
 * @Descripttion: 
 */

//导航栏按钮处理
var case_button = document.getElementById('learning_case');
var exam_button = document.getElementById('examination');
var case_icon = document.getElementById('case_icon');
var exam_icon = document.getElementById('exam_icon');

var imgMap = {
    'book_white' : './img/book_white.png',
    'book_grey' : './img/book_grey.png',
    'hat_white' : './img/hat_white.png',
    'hat_grey' : './img/hat_grey.png',
}

//初始化选中导航按钮
var selected_navi_button = case_button;
selected_navi_button.classList.add('selected');
case_icon.src = imgMap['book_white'];
exam_icon.src = imgMap['hat_grey'];

case_button.addEventListener('click', function(){
    if(selected_navi_button !== case_button){
        selected_navi_button.classList.remove('selected');
        selected_navi_button = case_button;
        selected_navi_button.classList.add('selected');
        case_icon.src = imgMap['book_white'];
        exam_icon.src = imgMap['hat_grey'];
        document.getElementById("main_view_exam").style.display = 'none';
        document.getElementById("main_view_case").style.display = 'block';
    }
});

exam_button.addEventListener('click', function(){
    if(selected_navi_button !== exam_button){
        selected_navi_button.classList.remove('selected');
        selected_navi_button = exam_button;
        selected_navi_button.classList.add('selected');
        case_icon.src = imgMap['book_grey'];
        exam_icon.src = imgMap['hat_white'];
        document.getElementById("main_view_case").style.display = 'none';
        document.getElementById("main_view_exam").style.display = 'block';
    }
});


var case_info_arr = [];
//案例列表处理，
fetch('./data/long_case.json').then(response => response.json())  // 解析JSON
.then(caseData => {
    case_info_arr = caseData;
    // 遍历数据并添加到表格中
    caseData.forEach(function(element, index) {
        var case_item = document.createElement('li');
        //绑定点击事件
        case_item.onclick = function() {
            case_item_clicked(index);
        };
        dis_index = index + 1;
        case_item.innerHTML = '<div class="item_index">' + dis_index + '.</div>' + '<div class="item_info">' + '<p style="font-size:1.2vw; margin-top: 0.3vh; margin-bottom: 0.3vh;">' + element.title + '</p>' + '<div class = "case_t_n_loc">' + '<p style="font-size:1vw; margin-top: 0.3vh; margin-bottom: 0.3vh; color: grey">事件时间:' + element.time + '</p>'+'<p style="font-size:1vw; margin-top: 0.3vh; margin-bottom: 0.3vh; margin-left: 1vw;color: grey">地区:' + element.region + '</p>' + '</div></div>';
        case_list.appendChild(case_item);
    });
})
.catch(error => console.error('Error:', error));  // 错误处理

//案例类别按钮处理
// var wzsj_button = document.getElementById("wzsj");
// var mmlw_button = document.getElementById("mmlw");
// var xsqz_button = document.getElementById("xsqz");
// var others_button = document.getElementById("others");

// var selected_category_button = wzsj_button;
// selected_category_button.classList.add('selected');


// wzsj_button.addEventListener('click', function(){
//     if(selected_category_button !== wzsj_button){
//         selected_category_button.classList.remove('selected');
//         selected_category_button = wzsj_button;
//         selected_category_button.classList.add('selected');
//         case_list.innerHTML = "";
//         //清空原有内容
//         case_info_arr.length = 0;
//         //案例列表处理
//         fetch('./data/wzsj_case.json').then(response => response.json())  // 解析JSON
//         .then(caseData => {
//                 case_info_arr = caseData;
//                 // 遍历数据并添加到表格中
//                 caseData.forEach(function(element, index) {
//                 var case_item = document.createElement('li');
//                 //绑定点击事件
//                 case_item.onclick = function() {
//                     case_item_clicked(index);
//                 };
//                 dis_index = index + 1;
//                 case_item.innerHTML = '<div class="item_index">' + dis_index + '.</div>' + '<div class="item_info">' + '<p style="font-size:1.2vw; margin-top: 0.3vh; margin-bottom: 0.3vh;">' + element.title + '</p>' + '<p style="font-size:1vw; margin-top: 0.3vh; margin-bottom: 0.3vh; color: grey">性质：' + element.properties + '</p>' + '</div>';
//                 case_list.appendChild(case_item);
//             });
//         })
//         .catch(error => console.error('Error:', error));  // 错误处理
//     }
// });

// mmlw_button.addEventListener('click', function(){
//     if(selected_category_button !== mmlw_button){
//         selected_category_button.classList.remove('selected');
//         selected_category_button = mmlw_button;
//         selected_category_button.classList.add('selected');
//         case_list.innerHTML = "";
//         //清空原有内容
//         case_info_arr.length = 0;
//         //案例列表处理
//         fetch('./data/mmlw_case.json').then(response => response.json())  // 解析JSON
//         .then(caseData => {
//                 case_info_arr = caseData;
//                 // 遍历数据并添加到表格中
//                 caseData.forEach(function(element, index) {
//                 var case_item = document.createElement('li');
//                 //绑定点击事件
//                 case_item.onclick = function() {
//                     case_item_clicked(index);
//                 };
//                 dis_index = index + 1;
//                 case_item.innerHTML = '<div class="item_index">' + dis_index + '.</div>' + '<div class="item_info">' + '<p style="font-size:1.2vw; margin-top: 0.3vh; margin-bottom: 0.3vh;">' + element.title + '</p>' + '<p style="font-size:1vw; margin-top: 0.3vh; margin-bottom: 0.3vh; color: grey">性质：' + element.properties + '</p>' + '</div>';
//                 case_list.appendChild(case_item);
//             });
//         })
//         .catch(error => console.error('Error:', error));  // 错误处理
//     }    
// });

// xsqz_button.addEventListener('click', function(){
//     if(selected_category_button !== xsqz_button){
//         selected_category_button.classList.remove('selected');
//         selected_category_button = xsqz_button;
//         selected_category_button.classList.add('selected');
//         case_list.innerHTML = "";
//         //清空原有内容
//         case_info_arr.length = 0;
//         //案例列表处理
//         fetch('./data/xsqz_case.json').then(response => response.json())  // 解析JSON
//         .then(caseData => {
//                 case_info_arr = caseData;
//                 // 遍历数据并添加到表格中
//                 caseData.forEach(function(element, index) {
//                 var case_item = document.createElement('li');
//                 //绑定点击事件
//                 case_item.onclick = function() {
//                     case_item_clicked(index);
//                 };
//                 dis_index = index + 1;
//                 case_item.innerHTML = '<div class="item_index">' + dis_index + '.</div>' + '<div class="item_info">' + '<p style="font-size:1.2vw; margin-top: 0.3vh; margin-bottom: 0.3vh;">' + element.title + '</p>' + '<p style="font-size:1vw; margin-top: 0.3vh; margin-bottom: 0.3vh; color: grey">性质：' + element.properties + '</p>' + '</div>';
//                 case_list.appendChild(case_item);
//             });
//         })
//         .catch(error => console.error('Error:', error));  // 错误处理
//     }
// });

// others_button.addEventListener('click', function(){
//     if(selected_category_button !== others_button){
//         selected_category_button.classList.remove('selected');
//         selected_category_button = others_button;
//         selected_category_button.classList.add('selected');
//         case_list.innerHTML = "";
//         //清空原有内容
//         case_info_arr.length = 0;
//         //案例列表处理
//         fetch('./data/others_case.json').then(response => response.json())  // 解析JSON
//         .then(caseData => {
//                 case_info_arr = caseData;
//                 // 遍历数据并添加到表格中
//                 caseData.forEach(function(element, index) {
//                 var case_item = document.createElement('li');
//                 //绑定点击事件
//                 case_item.onclick = function() {
//                     case_item_clicked(index);
//                 };
//                 dis_index = index + 1;
//                 case_item.innerHTML = '<div class="item_index">' + dis_index + '.</div>' + '<div class="item_info">' + '<p style="font-size:1.2vw; margin-top: 0.3vh; margin-bottom: 0.3vh;">' + element.title + '</p>' + '<p style="font-size:1vw; margin-top: 0.3vh; margin-bottom: 0.3vh; color: grey">性质：' + element.properties + '</p>' + '</div>';
//                 case_list.appendChild(case_item);
//             });
//         })
//         .catch(error => console.error('Error:', error));  // 错误处理
//     }
// });



//点击对应表项，传递并加载案例详情
function case_item_clicked(index) {

    // localStorage.setItem('case_title', case_info_arr[index].title);
    // localStorage.setItem('case_time', case_info_arr[index].time);
    // localStorage.setItem('case_full_text', case_info_arr[index].full_text);

    localStorage.setItem('case_info', JSON.stringify(case_info_arr[index]));
    window.location.href = 'case_detail.html';
  }