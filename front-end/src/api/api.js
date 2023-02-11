// 获取服务器内数据的方法
export function getData(root, url, params) {
    //接口返回的是promise对象
    root.service.get(url, { params: params }).then(res => {
        // console.log(res);
        if (res.status === 200 || res.status === 304) {
            // 获得分页总数量
            root.total = res.data.length
            if (url == '/work') {
                res.data.forEach(item => {
                    item.completion = Math.round((Number(item.completedNumber) / (Number(item.completedNumber) + Number(item.uncompletedNumber))) * 100) + '%';
                    item.checkRate = Math.round(Number(item.completedNumber / (Number(item.completedNumber) + Number(item.uncompletedNumber) * 2)) * 100) + '%';
                })
            }
            else if (url == '/info' || url == 'info/') {
                // 循环每一项 更改状态为中文
                res.data.forEach(item => {
                    item.sex == '1' ? item.sex_text = '男' : item.sex_text = '女'
                })
                // console.log(res.data);
            }
            root.tableData = [...res.data]
            return [...res.data]
        }
        else {
            console.error('请求列表错误');
        }
    }).catch(err => {
        console.log(err);
    })
}

// 新增
export function addStudent(root, url) {
    root.service.post(url, root.form).then(res => {
        if (res.status === 201) {
            root.$message({ message: '新增数据成功', type: 'success' })
        }
    }).catch(err => {
        root.$message({
            message: err.message + ' 错误原因：' + err.response.data, type: 'error', duration: 5000, showClose: true
        })
    })
}

// 修改
export function editStudent(root, url) {
    root.service.patch(url + '/' + root.form.id, root.form).then(
        res => {
            if (res.status === 201 || res.status === 200) {
                root.$message({ message: '修改数据成功', type: 'success' })
            } else {
                this.$message({ message: '修改数据失败', type: 'warn' })
            }
        }).catch(
            err => {
                console.log(err);
            }
        )
}