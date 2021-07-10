import React, { component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick';  
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import LifecycleB from './Components/LifecycleB';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import IncrementDecrement from './Components/IncrementDecrement';
import User from './Components/User';
import RenderPropsCounter from './Components/RenderPropsCounter';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';
import Animation from './Components/Animation';
import ThemeSwitcher from './Components/ReactBootstrap';
import ReactStrap from './Components/ReactStrap';
import ReactTables from './Components/ReactTables';

class App extends React.Component {
  render(){  
  return (
    <div className="App"> 

    {/* <ReactTables></ReactTables> */}
    {/* <ReactStrap></ReactStrap> */}
    {/* <ThemeSwitcher></ThemeSwitcher> */}
    {/* <Animation></Animation> */}

    {/* <UserProvider value="Vish"> */}
      {/* <ComponentC /> */}
    {/* </UserProvider> */}


    {/* <RenderPropsCounter>
    {(count, incrementCount) => (
        <ClickCounterTwo count={count} 
        incrementCount = {incrementCount} /> )} 
    </RenderPropsCounter>

    <RenderPropsCounter>
    {(count, incrementCount) => (
        <HoverCounterTwo count={count} 
        incrementCount = {incrementCount} /> )} 
    </RenderPropsCounter> */}

    {/* <IncrementDecrement></IncrementDecrement> */}
    {/* <ClickCounterTwo></ClickCounterTwo>  */}
    {/* <HoverCounterTwo></HoverCounterTwo>  */}
    {/* <User render={ (isLoggedIn) => isLoggedIn ? "Anmol" : "Anjali"}></User> */}
      {/* <ClickCounter name="Anmol"></ClickCounter> */}
      {/* <HoverCounter name="Anmol"></HoverCounter>  */}

    {/* <ErrorBoundary>
    <Hero heroName="Batman"></Hero>
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero heroName="Vicky"></Hero>
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero heroName="Joker"></Hero>
    </ErrorBoundary> */}

    {/* <PortalDemo></PortalDemo> */}
    {/* <FRParentInput></FRParentInput> */}
    {/* <FocusInput></FocusInput> */}
    {/* <RefsDemo></RefsDemo> */}
    {/* <ParentComp></ParentComp> */}
    {/* <PureComp></PureComp> */}
    {/* <Table></Table> */}
    {/* <FragmentDemo></FragmentDemo>  */}
    {/* <LifecycleB></LifecycleB> */}
    {/* <LifecycleA></LifecycleA> */}
    {/* <Form></Form> */}
    {/* <h1 className="error">Error</h1> */}
    {/* <h1 className={styles.success}>Success</h1> */}
    {/* <Inline></Inline> */}
    {/* <StyleSheet primary={true} ></StyleSheet>  */}
    {/* <NameList></NameList> */}
    {/* <UserGreeting></UserGreeting> */}
    {/* <ParentComponent></ParentComponent> */}
    {/* <EventBind></EventBind> */}
    {/* <ClassClick></ClassClick> */}
    {/* <FunctionClick></FunctionClick> */}
    {/* <Counter /> */}
      {/* <Message />  */}
      {/* <Greet name = "Mumma" heroName = "Akshu" /> */}
           {/* <p>This is childrun props</p> */}
      {/* {/* <Greet name = "Daddy" heroName = "Ajay Devgan" /> */}
      {/* <button>Shaana</button> */}
      {/* <Greet name = "sunny" heroName = "Animation" /> */}
      {/* <Welcome name = "Mumma" heroName = "Akshu" /> */}
      {/* <Welcome name = "Daddy" heroName = "Ajay Devgan"/> */}
      {/* <Welcome name = "sunny" heroName = "Animation"/>  */}
      {/* <Hello />   */}
    </div>
  );
}
}

export default App;
  