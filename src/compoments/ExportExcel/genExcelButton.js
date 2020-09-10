import React from "react";
import Button from "react-bootstrap/Button";
import {
  ExcelExport,
  ExcelExportColumn,
  ExcelExportColumnGroup,
} from "@progress/kendo-react-excel-export";
import { aggregateBy, process } from '@progress/kendo-data-query';
import products from '../../products.json';


class Excels extends React.Component {
  _exporter;
  data = [...products];
  export = () => {
    this._exporter.save();
    alert(this.props.clickedEmployee);
    /*
    var x = this.props.clickedEmployee;
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    
    today = yyyy + '-' + mm + '-31T22:00:00.000Z';
    console.log(today);

    var newArray = this.props.data.filter(function (el) {
      return el[""] === today
    });
    
    console.log(newArray[1]);
    console.log(x);
*/
    /*for (var i = 0; i < Object.keys(newArray).length; i++) {
      if (Object.keys(newArray)[i] == this.props.clickedEmployee) {
        console.log(Object.keys(newArray)[i])
      }
    }
*/

  };


  render() {
    return (
      <div>
        <Button onClick={this.export}>Preuzmi tablicu</Button>

        <ExcelExport
          data={this.data}
          fileName="Godnisnji.xlsx"
          ref={(exporter) => {
            this._exporter = exporter;
          }}
        >
          <ExcelExportColumnGroup
            field="Evidencija"
            title="Evidencija o radnom vremenu"
            locked={true}
            headerCellOptions={{ textAlign: "center" }}
          >
            <ExcelExportColumnGroup
              field="Poslodavac"
              title="Poslodavac: E-Glas d.o.o."
            >
              <ExcelExportColumnGroup
                field='employeeName'
                title=''
              >
                <ExcelExportColumnGroup
                  field="Mjesec i godina"
                  title="Mjesec i godina:date"
                >
                  <ExcelExportColumnGroup field="blank" title=" ">
                    {/*
                    <ExcelExportColumn
                      field="UnitPrice"
                      title="Price"
                      cellOptions={{ format: '$#,##0.00' }}
                      width={150}
                      footerCellOptions={{ wrap: true, textAlign: 'center' }}
                      groupFooterCellOptions={{ textAlign: 'right' }}
                      groupFooter={CustomGroupFooter}
                      footer={CustomFooter}
                    />
                  */}
                    <ExcelExportColumn
                      field="redniBroj"
                      title="Red.br. / Dan u mjesecu"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="pocetakRada"
                      title="Početak rada (hh:mm)"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="krajRada"
                      title="Završetak rada  (hh:mm)"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="brojSatiRada"
                      title="Ukupno dnevno vrijeme"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="od toga: redovan rad"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="od toga: rada noću"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="od toga: sati prekovremenog rada"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati terenskog rada"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati rada nedjeljom, blagdanom ili neradnim danima utvrđenim posebnim propisom"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Vrijeme i sati zastoja, prekida rada i sl. do kojeg je došlo kriv.poslod.ili uslijed dr.okolnosti "
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati u dane blagdana ili neradnih dana utvrđenih poseb. propisom u kojim radnik  ne radi"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati pripravnosti"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati korištenja godišnjeg odmora"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati plaćenog dopusta"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati neplaćenog dopusta"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati nenazočnosti u tijeku dnevnog rasporeda rad.vremena, u kojima radnik ne obavlja ugov. poslove"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati nenazočnosti u tijeku dnevnog rasporeda                                                             po zahtjevu radnika"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati provedeni u štrajku"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Sati isključenja s rada"
                      width={50}
                    />
                    <ExcelExportColumn
                      field="UnitsOnOrder"
                      title="Vrijeme korištenja rodiljnih i roditeljskih dopusta, mirovanja radnog odnosa ili korištenja drugih prava"
                      width={50}
                    />
                  </ExcelExportColumnGroup>
                </ExcelExportColumnGroup>
              </ExcelExportColumnGroup>
            </ExcelExportColumnGroup>
          </ExcelExportColumnGroup>
        </ExcelExport>
      </div >
    );
  }
}

export default Excels;
