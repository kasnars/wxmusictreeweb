<template>
  <div>
    <el-table
      v-loading="loading"
      :data="playlist"
      stripe
      style="width: 100%"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column prop="date" label="封面" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.picUrl" alt height="50">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
      />
      <el-table-column prop="copywriter" label="描述" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="onEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/playlist'
import scroll from '@/utils/scroll'
// import { getList } from '@/api/table'
export default {
  data() {
    return {
      playlist: [],
      count: 50,
      loading: false
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    scroll.start(this.getList)
  },
  methods: {
    getList() {
      this.loading = true
      fetchList({
        start: this.playlist.length,
        count: this.count
      }).then((res) => {
        console.log(res)
        this.playlist = this.playlist.concat(res.data)
        if (res.data.length < this.count) {
          console.log('e')
          scroll.end()
        }
        this.loading = false
      })
    },
    onEdit(row) {
      this.$router.push(`/playlist/edit/${row._id}`)
    }
  }
}
</script>

<style scoped>

</style>
