<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                fixed
                prop="id"
                label="编号"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="书名"
                width="120">
            </el-table-column>
            <el-table-column
                prop="author"
                label="作者"
                width="120">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
<!--    分页条    -->
        <el-pagination
            background
            layout="prev, pager, next"
            page-size="6"
            :total="totalElements"
            @current-change="page">
        </el-pagination>
    </div>

</template>

<script>
export default {
    data() {
        return {
            tableData: null,
            totalElements: null,
        }
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        page(currentPage) {
            const _this = this;
            axios.get('http://121.41.102.192:8181/book/findAll/' + currentPage + '/6').then(function (resp) {
                _this.tableData = resp.data.content;
                _this.total = resp.data.totalElements;
            });
        },
        edit(row) {
            this.$router.push({
                path: '/updateBook',
                query:{
                    id: row.id
                }
            })
        }
    },
    created() {
        const _this = this;
        axios.get('http://121.41.102.192:8181/book/findAll/1/6').then(function (resp) {
            _this.tableData = resp.data.content;
            _this.totalElements = resp.data.totalElements;
        })
    }
}
</script>