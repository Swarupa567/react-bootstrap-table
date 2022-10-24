import React, {useState, useEffect} from 'react';
import data from '../constants/data.json';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function Table() {
    const[tableData, SetTableData] = useState([]);

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: "Next",
        firstPageText: "Prev",
        nextPageText:">",
        prevPageText:"<",
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function(page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    })

    const columns = [
        {dataField:'superInstId',text:'SuperInstId',sort: true},
        {dataField:'InstId',text:'InstitutionId',sort: true},
        {dataField:'TxnCorrelationId',text:'TxnCorrId',sort: true},
        {dataField:'MTI',text:'MTI',sort: true},
        {dataField:'RRN',text:'RRN',sort: true},
        {dataField:'TxnId',text:'TxnId',sort: true},
        {dataField:'TxnAmount',text:'TxnAmount',sort: true},
        {dataField:'ResponseCode',text:'ResCode',sort: true},
        {dataField:'ResponseDesc',text:'ResDesc',sort: true},
        {dataField:'ResponseReceivedDate',text:'ResRecDate',sort: true}
    ]
    useEffect(() => {
    //  console.log(data);
     SetTableData(data);
    },[]);

  return (
    <div>
        <BootstrapTable 
        bootstrap4 
        keyField='superInstId'
        columns={columns}
        data={tableData}
        pagination={pagination}
        />
        {/* <table>
            <tr>
            <td><input type="checkbox"/></td>
              <th>SuperInstitutionId</th>
              <th>InstitutionId</th>
              <th>TxnCorrelationId</th>
              <th>MTI</th>
              <th>RRN</th>
              <th>TxnId</th>
              <th>TxnAmount</th>
              <th>ResponseCode</th>
              <th>ResponseDesc</th>
              <th>ResponseReceivedDate</th>
            </tr>
            {
                tableData && tableData.length> 0 ?
                tableData.map(table =>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>{table.superInstId}</td>
                        <td>{table.InstId}</td>
                        <td>{table.TxnCorrelationId}</td>
                        <td>{table.MTI}</td>
                        <td>{table.RRN}</td>
                        <td>{table.TxnId}</td>
                        <td>{table.TxnAmount}</td>
                        <td>{table.ResponseCode}</td>
                        <td>{table.ResponseDesc}</td>
                        <td>{table.ResponseReceivedDate}</td>
                    </tr>
                    )
                    : "Loading"
            }
        </table> */}
    </div>
  )
}

export default Table;
