import Card from "./comp/card";
import './App.css'




function App() {
  return (
    <div class= "app">
      <div className="aap">

  <Card title ="pink" colors="#FF6333" code="#FF6333"/>
  <Card title ="Gray" colors="#333333" code="#333333"/>
  <Card title ="Black" colors="#000000" code="#000000"/>
  <Card title ="Green" colors="#38BB14" code="#38BB14"/>
  <Card title ="Red" colors="#C90B0B" code="#C90B0B"/>  
</div>

<div className="maap">

<Card title ="Orange" colors="#FF8000" code="FF8000"/>
  <Card title ="Yellow" colors="#FFF500" code="FFF500"/>
  <Card title ="Light Gray" colors="#cccccc" code="CCCCCC"/>
  <Card title ="purple" colors="purple" code="#7E41A2"/>
  <Card title ="brown" colors="#C14911" code="#C14911"/>
</div>
    </div>

   
  );

}

export default App;
