<template>
<div id="myGrid" style="height: 650px;width: 1200px" class="ag-theme-balham">
</div>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {Grid} from "ag-grid-community"
export default {
  
  data() {
    return {
    gridOptions: {
        columnDefs: [
        {headerName: 'ComponentID', field: 'selGamenId',editable: true,resizable:true},
        {headerName: 'ViewId', field: 'selViewId',filter: true,resizable:true},
        {headerName: 'MenuName', field: 'selMenuName',sortable: true,resizable:true},
        {headerName: 'ComponentKbn', field: 'gamenKbn',resizable:true},
        {headerName: 'language', field: 'language',resizable:true},
        {headerName: 'paramData', field: 'paramData',resizable:true},
        {headerName: 'skipFlg', field: 'skipFlg',resizable:true},
        {headerName: 'businessKbn', field: 'gyoumuKbn',resizable:true},
        ],
      rowData: [],
    },
    }
  },

  methods: {
    getRowData() {
      //  return  this.$http.get('http://localhost:9090/menus')
      return this.axios.get('/api/menus')
    },
    async init() {
        const res = await this.getRowData().catch(function(err) {window.console.log(err)})
        this.gridOptions.rowData = res.data;
        let eGridDiv = document.querySelector('#myGrid');
        new Grid(eGridDiv, this.gridOptions);
      }
  },
 mounted() {
      this.init()
  }
}
</script>