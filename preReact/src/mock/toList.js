//api.js
import Mock from 'mockjs'

let url = {
    tableDataOne: 'http://20181024Mock.com/mode1/tableDataOne',
    tableDataTwo: 'http://20181024Mock.com/mode1/tableDataTwo',
    tableDataThi: 'http://20181024Mock.com/mode1/tableDataThi',
}
module.export = [
    Mock.mock(url.tableDataOne,'get', {
        'dataSource|5':[{
            'key|+1': 1,
            'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
]