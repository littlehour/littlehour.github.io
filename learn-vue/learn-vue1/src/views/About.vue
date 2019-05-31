<!--<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<style scoped>
@import '../../public/less/en/home/index.less';
.about{
  background: #808080;
}
</style>-->
<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
	<div class="row"><div class="col-xs-12">
		<form class="form-inline">
			<div class="form-group">
				<label for="file">Spreadsheet</label>
				<input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change" />
			</div>
		</form>
	</div></div>
	<div class="row"><div class="col-xs-12">
		<button :disabled="data.length ? false : true" class="btn btn-success" @click="_export">Export</button>
	</div></div>
	<div class="row"><div class="col-xs-12">
		<div class="table-responsive">
			<table class="table table-striped" id="sheetjs">
				<thead><tr>
					<th v-for="(val, key) in cols" :key="key">{{val}}</th>
				</tr></thead>
				<tbody>
					<tr v-for="(r, key) in data" :key="key">
						<td v-for="(val, key1) in cols" :key="key1"> {{ r[key1] }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div></div>
</div>
</template>

<script>
import XLSX from 'xlsx';
// const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));
// const make_cols = function(refstr){
//   var a = XLSX.utils.decode_range(refstr)
//   var c = Array(a.e.c + 1).fill(0)
//   c.map(function(x, i){
//     var b = XLSX.utils.encode_col(i)
//     return {
//       name: b,
//       key: i
//     }
//   })
// }
const make_cols = function(data){
  var a = XLSX.utils.decode_range(refstr)
  var c = Array(a.e.c + 1).fill(0)
  c.map(function(x, i){
    var b = XLSX.utils.encode_col(i)
    return {
      name: b,
      key: i
    }
  })
}
const _SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");
export default {
	data() {
		return {
			data: [],
			cols: [
				// {name:"A", key:0},
				// {name:"B", key:1},
				// {name:"C", key:2},
				// {name:"D", key:3},
				// {name:"E", key:4},
				// {name:"F", key:5},
				// {name:"G", key:6},
			],
			SheetJSFT: _SheetJSFT
  }; },
  mounted() {
    console.log(XLSX)
  },
	methods: {
		_suppress(evt) { evt.stopPropagation(); evt.preventDefault(); },
		_drop(evt) {
			evt.stopPropagation(); evt.preventDefault();
			const files = evt.dataTransfer.files;
			if(files && files[0]) this._file(files[0]);
		},
		_change(evt) {
			const files = evt.target.files;
			if(files && files[0]) this._file(files[0]);
		},
		_export(evt) {
			/* convert state to workbook */
      // const ws = XLSX.utils.json_to_sheet(this.data);
      // console.log(ws)

      var tbl = document.getElementById('sheetjs');
      var wb = XLSX.utils.table_to_book(tbl, {sheet:'SheetJS'});
      // var proDatas = {
      //   attr1: '属性1',
      //   attr2: '属性2',
      //   attr3: '属性3',
      //   attr4: '属性4',
      //   attr5: '属性5',
      //   attr6: '属性6',
      // }
      // var ws = XLSX.utils.json_to_sheet([proDatas]);
			// const wb = XLSX.utils.book_new();
			// XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
      /* generate file and send to client */
      
			XLSX.writeFile(wb, "sheetjs.xlsx");
		},
		_file(file) {
			/* Boilerplate to set up FileReader */
      const reader = new FileReader();
      FileReader.prototype.readAsBinaryString = function (fileData) {
          var binary = "";
          var pt = this;
          var reader = new FileReader();
          reader.onload = function (e) {
          var bytes = new Uint8Array(reader.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i]);
          }
          pt.content = binary;
          pt.onload(pt); //页面内data取pt.content文件内容
        }
        reader.readAsArrayBuffer(fileData);
      }
			reader.onload = (e) => {
				/* Parse data */
        const bstr = e.content;
        const wb = XLSX.read(bstr, {type:'binary'});
				/* Get first worksheet */
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
				/* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, {header:'A'});
        console.log(data)
        for(var i in data[0]){
          console.log(i)
        }
        this.data = data.slice(2)
        this.cols = data[0]
        console.log(this.data, this.cols)
        /* Update state */
        // console.log(data, data.slice(2),ws['!fullref'],ws['!cols'],ws['!rows'],ws['!merges'],ws['!autofilter'],wb,ws)
				// this.data = data.slice(2);
				// this.cols = make_cols(ws['!ref']);
        // this.cols = make_cols(data[0]);
        // var range = XLSX.utils.decode_range(ws['!ref'])
        // var range = XLSX.utils.encode_range({e: {c: 255, r: 15},s: {c: 0, r: 0}})
        // console.log(range,XLSX.utils.decode_cell('A1'),wb,ws)
        // for(var R = range.s.r; R <= range.e.r; ++R) {
        //   for(var C = range.s.c; C <= range.e.c; ++C) {
        //     var cell_address = {c:C, r:R};
        //     /* if an A1-style address is needed, encode the address */
        //     var cell_ref = XLSX.utils.decode_cell(cell_address);
        //     console.log(cell_ref)
        //   }
        // }
        // var datas = [];//清空接收数据
        // //编辑数据
        // for(var i= 0;i<data.length;i++){
        //   console.log(data[i])
        //   var sheetData = {
        //       address: data[i].addr,
        //       value: data[i].value
        //   }
        //   datas.push(sheetData);
        // }
        // console.log(datas)
			};
			reader.readAsBinaryString(file);
		}
	}
};
</script>