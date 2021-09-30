import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { AuthProvider } from '../auth/auth';
import { FeedPage } from '../feed/feed.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   email:string = '';
  password:string = '';
  errorMsg:string;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider,
    private route: Router,
    public alertCtrl: AlertController ,

    ) { }

 
  ngOnInit() { }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: message,
      buttons: ['OK']
    });
    (await alert).present();
  }

  login() {
    if (this.email.trim() !==''    ) {    
      
      console.log(this.email.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        this.('Please put your password')
 
      }else{
 
        let credentials = {
          email: this.email,
            password: this.password
        };
 
        
         this.authService.login(credentials).then((result) => {
            console.log(result);
            this.navCtrl.(FeedPage);
           
        }, (err) => {
     
            console.log(err);
            this. ('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. ('Please put a valid password !  for ex:(123456)')
   
    }
 
  }

  register() {
    this.route.navigate(['/register']);
  }
  
 
}
