import React from 'react'
import {Card, Col, Row,BackTop} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import TypingCard from '../../../components/TypingCard'

import xml2json from "../../../xml2json";
import xml1 from "../../../开始.xml"




import { Tree,Input,Dialog,Tabs,Button,Icon,MessageBox,Upload } from 'element-react';

import 'element-theme-default';



const props = {
  name: 'file',
  action: '',
  headers: {
    authorization: 'authorization-text',
  },
  // onChange(info) {
  //   if (info.file.status !== 'uploading') {
  //     // console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === 'done') {
  //     message.success(`${info.file.name} 文件上传成功`);
  //   } else if (info.file.status === 'error') {
  //     message.error(`${info.file.name} 文件上传失败`);
  //   }
  // },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
}



class UploadDemo extends React.Component {
  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: '',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],

    dialogImageUrl: '',
    dialogVisible: false,
  }



  constructor(props) {
    super(props);

    this.state = {

      data:exportFn(xml2json.fromFile(xml1)),
          //,
      fileList: [
        {
          uid: '-1',
          name:'xxx.xml',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png',

        }
      ],
      file:{}


    },
        this.state1 = {
          tabs: [{
            title: 'Tab 1',
            name: 'Tab 1',
            content: 'Tab 1 content',
          }, {
            title: 'Tab 2',
            name: 'Tab 2',
            content: 'Tab 2 content',
          }],
          tabIndex: 2,
        }
        this.state2 ={

          data2: [{
            id: 1,
            label: 'C:',
            children: [{
              id: 4,
              label: 'work',
              children: [{
                id: 9,
                label: 'today',
                children:[{
                  id:22,
                  label:'morning'
                }]
              }, {
                id: 10,
                label: '明天的工作要求',
                children: [{
                  id:23,
                  label: '要求.txt',
                }]
              }]
            }]
          }, {
            id: 2,
            label: 'D:',
            children: [{
              id: 5,
              label: 'game',
              children: [{
                id:24,
                label: 'CS:GO',
              }]
            }, {
              id: 6,
              label: 'read'
            }]
          }, {
            id: 3,
            label: 'E:',
            children: [{
              id: 7,
              label: 'what is wrong'
            }, {
              id: 8,
              label: '问题事项'
            }]
          }],
          option2: {
            children: 'children',
            label: 'label'
          }
        }


  }






  render() {

    const props = {
      beforeUpload:this.handleReturn,
      //onChange: this.handleChange,
      onRemove: this.handleRemove,
      multiple: false,
      accept:".xml",

    };


    let js=xml2json.fromFile(xml1);
    console.log(exportFn(js))
    const { data, options } = this.state
    const {data2,option2}=this.state2

    const { dialogImageUrl, dialogVisible } = this.state;

    let jso=xml2json.fromFile(xml1);
    console.log(jso);

    let arr1=[];
    for(let i in jso){
      arr1.push(jso[i]);
    }
    console.log(arr1)
    getTreeItem(arr1)

    const cardContent = `本页面的具体功能是用于查看搜索目录，在这里可以提供对于目录的展示以及搜索,当然还有上传功能（虽然这个功能还尚未完善）`
    const label = <span><Icon name="date" /> {this.state.data[1].parentName}</span>
    //const label2= <span><Icon name="date"/>> {this.state2.data[1].name}</span>
    const label2= <span><Icon name="date"/>盘默认c</span>
    const label3= <div className="upload-demo">
      <Upload {...props}>
        <i className="el-icon-plus"/>
      </Upload>

      <Dialog
          visible={dialogVisible}
          size="tiny"
          onCancel={() => this.setState({ dialogVisible: false })}
      >
        <img width="10%" src={dialogImageUrl} alt="" />
      </Dialog>
    </div>



    return (
      <div>

        <CustomBreadcrumb arr={['输入', '上传']}/>
        <TypingCard source={cardContent} height={234}>

        </TypingCard>
        <Row gutter={16}>
          <Col span={24}>
            <Card title={"已有设备"}>
              <Tabs type="border-card" activeName="1">
                <Tabs.Pane label="select" name="1">请选择你的存储设备</Tabs.Pane>

                <Tabs.Pane label={label} name="2" className="edit" >
                  <div >
                    <Input placeholder="输入关键字进行过滤" onChange={text=> this.tree.filter(text)} />
                    <div >
                      <Tree
                          ref={e=> this.tree = e}
                          className="filter-tree"
                          data={data}
                          options={options}
                          nodeKey="id"
                          defaultExpandAll={false}
                          filterNodeMethod={(value, data)=>{
                            if (!value) return true;
                            return data.label.indexOf(value) !== -1;
                          }}
                      />
                    </div>
                  </div>
                </Tabs.Pane>
                <Tabs.Pane label={label2} name="3">
                  <div >
                    <Input placeholder="输入关键字进行过滤" onChange={text=> this.tree.filter(text)} />
                    <div >
                      <Tree
                          ref={e=> this.tree = e}
                          className="filter-tree"
                          data={data2}
                          options={option2}
                          nodeKey="id"
                          defaultExpandAll={false}
                          filterNodeMethod={(value, data)=>{
                            if (!value) return true;
                            return data.label.indexOf(value) !== -1;
                          }}
                      />
                    </div>
                  </div>
                </Tabs.Pane>
                <Tabs.Pane name="4" label={label3}>
                  loading
                </Tabs.Pane>

              </Tabs>
            </Card>
          </Col>

          <Col span={12}>
            <Card>


            </Card>
          </Col>
          {/*  /!*<Card title={"上传"}>*!/*/}
          {/*  */}
          {/*  /!*</Card>*!/*/}
          {/*</Col>*/}

          {/*<Col span={24}>*/}

          {/*  <Card>*/}
          {/*    <div>*/}
          {/*      <div style={{marginBottom: '20px'}}>*/}
          {/*        <Button size="small" onClick={() => this.addTab()}>add tab</Button>*/}
          {/*      </div>*/}
          {/*      <Tabs type="card" value="Tab 2" onTabRemove={(tab) => this.removeTab(tab)}>*/}
          {/*        {*/}
          {/*          this.state1.tabs.map((item, index) => {*/}
          {/*            return <Tabs.Pane key={index} closable label={item.title} name={item.name}>{item.content}</Tabs.Pane>*/}
          {/*          })*/}
          {/*        }*/}
          {/*      </Tabs>*/}
          {/*    </div>*/}
          {/*  </Card>*/}
          {/*</Col>*/}


        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }


  handleReturn =(file)=>{
    this.setState(

    )
    console.log(this.state)
  }; //接收file对象

  uploadOnClick(){
    MessageBox.alert("仅支持xml格式文件");
  }

  addTab() {
    const { tabs, tabIndex } = this.state1;
    const index = tabIndex + 1;

    tabs.push({
      title: 'new Tab',
      name: 'Tab ' + index,
      content: 'new Tab content',
    });
    this.setState({
      tabs,
      tabIndex: index,
    });
  }

  removeTab(tab) {
    const { tabs, tabIndex } = this.state1;

    tabs.splice(tab.key.replace(/^\.\$/, ''), 1);
    this.setState({
      tabs,
    });
  }


  handleChange = (info) => {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    //fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. Filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return false;
    });
    this.setState({ fileList });
  };


  handleRemove(file, fileList) {
    console.log(file, fileList);
  }






  impBtn(){
    let x2js = new xml2json();
    let jsonObj;
    try {
      jsonObj = JSON.parse(this.textarea);
    } catch (error) {
      jsonObj = xml2json.fromFile( this.textarea );
    }
    if (jsonObj === null) {
      alert("输入格式不对");
      return;
    }
    this.data = exportFn({xml: jsonObj})
  }


}

// const styles = {
//   colItem: {
//     minHeight: 230,
//     borderRadius: 3,
//     margin: '10px 0'
//   }
// }


function getTreeItem(data:any) {
  data.map((item:any)=>{
   // console.log(item);
    if (item.children){
      getTreeItem(item.children);
    }
    //检测是否有id等

  })
}


function  exportFn(xml) {
  let xx = {
    nodes: []
  }
  isObject(xml) ? getNodes(xml, '', 0, xx) : getNodesArr(xml, '', 0, xx);
  let getData = uniqu(xx.nodes);
  let sourceList = bulid(getData)
  //console.log(sourceList)
  return formaterTreeData(sourceList);
}

function bulid(nodes) {
  let topNodes=[];let i = 0;
  if(Array.isArray(nodes)&&nodes.length>0){
    nodes.forEach((node,index) => {
      let parentName=node.parentName;
      if(parentName === ''){
        topNodes.push(node);
        return true;
      }
      nodes.forEach(function(parNode) {
        let name = parNode.name;
        if (parentName!=='' && (parentName==name || parentName == parNode.nodeName)) {
          parNode.children.push(node);
          return true;
        }
      })
    })
  }
  let root= { name: '', label:'',children:[]};

  if (topNodes.length === 1) {

    root = topNodes[0];

  } else {
    root.children.push(topNodes);
  }
  return root
}

function uniqu(nodes) {
  let obj = {};
  let arr = [];
  nodes.forEach((node, index) => {

    obj[node.name] = node;
  })
  for (let i in obj){
    arr.push(obj[i])

  }
  return arr;
}

function getProType(val) {
  return Object.prototype.toString.call(val)
}

function getNodes(curObj, parentKey = '', idx = 0, obj) {
  let formObj = {
    name: '',
    label: '',
    parentName: '',
    nodeName: ''
  }
  for (let key in curObj) {
    let nodeName = '';
    formObj = {
      name: '',
      label: '',
      parentName: '',
      nodeName: ''
    }
    if (getPropertype(curObj[key]) === 'Object' || Array.isArray(curObj[key])) {
      formObj.children = []
    }
    nodeName =  key;
    //原本为nodeName = parentKey + (parentKey === '' ? '' : '>') + key;

    //原本为formObj.label = `key:` + getPropertype(curObj[key]);
    formObj.name = nodeName;
    formObj.label = '';
    formObj.label =formObj.name;
    formObj.parentName = parentKey;
    formObj.nodeName = '';
    formObj.nodeName = key;
    obj.nodes.push(formObj);
    if (isObject(curObj[key])) {
      getNodes(curObj[key], nodeName, idx + 1, obj);
    } else if (Array.isArray(curObj[key])) {
      nodeName += '[]';
      formObj.label = formObj.name,
          formObj.name = nodeName,
      getNodesArr(curObj[key], nodeName, idx + 1, obj);
    }
  }
}

function getNodesArr(curArr, parentKey = '', idx = 0, obj) {
  if (curArr.length !== 0) {
    curArr.forEach((val, index) => {

      if (isObject(val)) {
        getNodes(val, parentKey, idx + 1, obj);
      } else if (Array.isArray(val)) {
        getNodesArr(val, parentKey, idx + 1, obj);
      }
    });
  }

}

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

function getPropertype(val) {
  let outputName = Object.prototype.toString.call(val);
  let value;
  switch (outputName) {
    case '[object Object]':
      value = 'Object';
      break;
    case '[object Number]':
      value = 'Number';
      break;
    case '[object String]':
      value = 'String';
      break;
    default:
      value = 'Array';
      break;
  }
  return value;
}

function formaterTreeData(params) {
  let treeData = params.name === '' ? params.children[0] : params.children;
  let arr = [];
  if (treeData.length === 0) {
    arr.push(params);
  } else {
    treeData.forEach((value, index) => {
      arr.push(value);
    });
  }
  if (arr[0].length > 1) {
    return [{
      name: '',
      label: '',
      children: [...arr]
    }];
  } else {
    return arr;
  }
}












export default UploadDemo
