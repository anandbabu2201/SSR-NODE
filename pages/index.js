import Link from 'next/link'
import './index.css';
import Card from './Card';

export default () =>(
  <div className="App">
      <header className="App-header">
          <Link href="/page2">
          <img src="/static/logo.png" className="static-logo" alt="logo" />
          </Link>
       
          </header>
      <div className="Grid">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

      </div>
  </div>
)
    
