import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  rfqId: string;
  version: string;
  rfqProperty1: string;
  rfqProperty2: string;
  rfqProperty3: string;
  rfqProperty4: string;
  rfqProperty5: string;

  http: HttpClient;
  rfqUri: string;
  datePipe: DatePipe;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencodeed; charset=utf-8' })
  };

  constructor(private http1: HttpClient) { }

  ngOnInit() {
    this.rfqId = "";
    this.version = "";
    this.rfqUri = "http://localhost:8090/persist";
    this.rfqProperty1 = "";
    this.rfqProperty2 = "";
    this.rfqProperty3 = "";
    this.rfqProperty4 = "";
    this.rfqProperty5 = "";
    // this.http = new HttpClient();
    this.datePipe = new DatePipe(new Date().toLocaleDateString());
  }

  onSubmit() {

    var rfqHeader = new RfqHeader();
    rfqHeader.rfqId = this.rfqId;
    rfqHeader.version = this.version;
    rfqHeader.parentId = "1";
    rfqHeader.flow = "saas";
    rfqHeader.messageId = "";
    rfqHeader.state = "none";
    rfqHeader.sentBy = "damon";
    rfqHeader.event = "none";
    var dateTemp = new Date();
    var year = dateTemp.getFullYear();
    var monuth = dateTemp.getMonth();
    var day = dateTemp.getDay();
    var hour = dateTemp.getHours();
    var minute = dateTemp.getMinutes();
    var seconds = dateTemp.getSeconds();
    rfqHeader.timestamp = "";
    rfqHeader.roledefinition = "popuprole:closerole";
    rfqHeader.routingtargets = "popuprole:damon";

    var rfqProperty1 = new RfqProperty();
    rfqProperty1.rfqId = this.rfqId;
    rfqProperty1.version = this.version;
    rfqProperty1.name = "TemplateKey";
    rfqProperty1.value = this.rfqProperty1;

    var rfqProperty2 = new RfqProperty();
    rfqProperty2.rfqId = this.rfqId;
    rfqProperty2.version = this.version;
    rfqProperty2.name = "customer";
    rfqProperty2.value = this.rfqProperty2;

    var rfqProperty3 = new RfqProperty();
    rfqProperty3.rfqId = this.rfqId;
    rfqProperty3.version = this.version;
    rfqProperty3.name = "product";
    rfqProperty3.value = this.rfqProperty3;

    var rfqProperty4 = new RfqProperty();
    rfqProperty4.rfqId = this.rfqId;
    rfqProperty4.version = this.version;
    rfqProperty4.name = "quantity";
    rfqProperty4.value = this.rfqProperty4;

    var rfqProperty5 = new RfqProperty();
    rfqProperty5.rfqId = this.rfqId;
    rfqProperty5.version = this.version;
    rfqProperty5.name = "new property test";
    rfqProperty5.value = this.rfqProperty5;

    var rfqMessage = new RfqMessage();
    rfqMessage.rfqHeader = rfqHeader;
    rfqMessage.rfqProperties = [];
    if (rfqProperty1.value != "") {
      rfqMessage.rfqProperties.push(rfqProperty1);
    }
    if (rfqProperty2.value != "") {
      rfqMessage.rfqProperties.push(rfqProperty2);
    }
    if (rfqProperty3.value != "") {
      rfqMessage.rfqProperties.push(rfqProperty3);
    }
    if (rfqProperty4.value != "") {
      rfqMessage.rfqProperties.push(rfqProperty4);
    }
    if (rfqProperty5.value != "") {
      rfqMessage.rfqProperties.push(rfqProperty5);
    }
    // rfqMessage.rfqProperties = [rfqProperty1, rfqProperty2, rfqProperty3, rfqProperty4];

    // var reqBody = {"rfqMessage":rfqMessage};

    console.log("==rfqMessage==", rfqMessage);

    var param = new HttpParams();

    var strRfqMessage = JSON.stringify(rfqMessage);

    param.append("rfqMessage", JSON.stringify(rfqMessage));

    // console.log("==strRfqMessage==",strRfqMessage);

    var reqBody = "rfqMessage=" + strRfqMessage;

    this.http1.post(this.rfqUri, rfqMessage, { params: param })
      .subscribe(
        val => {
          console.log('post请求成功', val);
        },
        error => {
          console.log('post请求失败', error);
        }
      );
  }

}

class RfqHeader {
  rfqId: string;
  version: string;
  parentId: string;
  flow: string;
  messageId: string;
  state: string;
  sentBy: string;
  event: string;
  timestamp: string;
  roledefinition: string;
  routingtargets: string;
}

class RfqProperty {
  rfqId: string;
  version: string;
  name: string;
  value: string;
}

class RfqMessage {
  rfqHeader: RfqHeader;
  rfqProperties: RfqProperty[];
}