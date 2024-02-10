import React,{useState} from 'react'
import { HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'
const Editor = () => {
  // // const [content,setContent] = useState("Text Here");

  // // const handleContentSetting = (e)=>{
  // //   setContent(e.value)
  // // };
  // // const handleContentFocus = ()=>{
  // //   if(content == "Text Here"){
  // //     setContent("");
  //   }
  // };
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
       <Header category="App" title="Editor"/>
       <RichTextEditorComponent
       id="Editor"
      //  value={content}
      //  change={handleContentSetting}
      //  focus={handleContentFocus}
       >
        <EditorData/>
        <Inject services={[HtmlEditor,Image,Link,QuickToolbar,Toolbar]}/>
       </RichTextEditorComponent>
    </div>
  )
}

export default Editor