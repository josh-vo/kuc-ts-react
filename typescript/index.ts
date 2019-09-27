import * as kintoneUIComponent from '@kintone/kintone-ui-component/esm/js';
(function () {
    var table = new kintoneUIComponent.Table({
        // inital table data
        data: [
          {text: { value: 'this is a text field' }}
        ],
        // default row data on row add
        defaultRowData: {text: { value: 'default text field value' }},
        columns: [
          {
            header: 'Text',
            cell: function() { return kintoneUIComponent.createTableCell('text', 'text') }
          },
        ]
      });
      var body = document.getElementsByTagName("BODY")[0];
      body.appendChild(table.render());
      
      var button = document.createElement('button');
      button.innerText = 'Set Values';
      button.onclick = function () {
        table.setValue([
          {text: { value: 'first row' }},
          {text: { value: 'second row' }},
          {text: { value: 'third row' }}
        ]);
      };
      body.appendChild(button);
})();