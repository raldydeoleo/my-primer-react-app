import Logo from './Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
         <div class="page-header card">
                                        <div class="row align-items-end">
                                            <div class="col-lg-8">
                                                <div class="page-header-title">
                                                    <i class="icofont icofont-listine-dots bg-c-lite-green"></i>
                                                    <div class="d-inline">
                                                        <h4>Shopping cart</h4>
                                                        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="page-header-breadcrumb">
                                                    <ul class="breadcrumb-title">
                                                <li class="breadcrumb-item">
                                                    <a href="index.html">
                                                        <i class="icofont icofont-home"></i>
                                                    </a>
                                                </li>
                                                <li class="breadcrumb-item"><a href="#!">E-Commerce</a>
                                                </li>
                                                <li class="breadcrumb-item"><a href="#!">Shopping cart</a>
                                                </li>
                                            </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="page-body">

                                    </div>
      <header>  
       
      </header>
    </div>
  );
}

export default App;
/*
<img src={Logo} className="App-logo" alt="logo" />
import { withAuthenticator} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <h1>Notes App</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);*/