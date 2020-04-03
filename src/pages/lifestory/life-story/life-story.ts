import { Component, ViewChild } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController, NavParams, ModalController, Tabs, Events, Platform } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { AddStoryModule } from '../../addstory/add-story/add-story.module';
import { LifeStoryService } from '../../../providers/WebServices/LifeStory/LifeStoryService';
import * as Constant from '../../../Utility/Constant';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ConfigProvider } from '../../../providers/config/config';
import { Storage } from '@ionic/storage';
import { AlertServiceProvider } from '../../../providers/alert-service/alert-service';

@Component({
  selector: 'page-life-story',
  templateUrl: 'life-story.html',
})
export class LifeStoryPage {

  tab1Root = "ExperiencePage";
  tab2Root = "MediaPage";
  tab3Root = "ProfilePage";
  tab4Root = "FamilynFriendsPage";

  tabParam: any;

  @ViewChild('myTabs') tabRef: Tabs;

  showHeaderContent: boolean = false;
  tabs: string = "exptabs";
  subtabs: string = "livetabs";
  lifeStoryAddStoryModal: any;
  isAddStory: boolean = true;
  lifeStoryData: any;
  ownerName: string;
  unregisterBackButtonAction: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private photoViewer: PhotoViewer,
    private inAppBrowser: InAppBrowser,
    public lifeStoryService: LifeStoryService,
    public events: Events,
    public platform: Platform,
    private socialSharing: SocialSharing,
    private config: ConfigProvider,
    private storage: Storage,
    private alertService: AlertServiceProvider
  ) {
    //debugger;
    this.lifeStoryData = this.navParams.get('lifeData');
    this.showHeaderContent = false;
    this.ownerName = this.lifeStoryData.ownerName;
    console.log("page-life-story LifeStoryData: ", this.lifeStoryData);
  }


  ionViewWillEnter() {
    this.tabParam = { tab: this.tabRef };

    setTimeout(() => {
      this.showHeaderContent = true;
    }, 500);

    this.initializeBackButtonCustomHandler();
  }
  ionViewCanEnter() {
    if (localStorage.getItem("userId")) {
      return true;
    } else {
      return false;
    }
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  initializeBackButtonCustomHandler() {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      console.log("backbutton!");
      this.navCtrl.setRoot('HomePage');
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad life-story');
    this.events.subscribe(Constant.KEY_NOTIFF.TabSelect, (tabToSelect) => {
      try {
        this.lifeStoryAddStoryModal.dismiss();

      }
      catch (e) {

      }
      //this.lifeStoryAddStoryModal.dismiss();

      this.tabRef.select(tabToSelect);
      this.events.publish(Constant.KEY_NOTIFF.LifeStoryUpdate);
    });

    if (this.lifeStoryData.roleId == 4) {
      this.isAddStory = false;
    }
  }

  ionViewWillUnload() {
    this.events.unsubscribe(Constant.KEY_NOTIFF.TabSelect);
  }

  openExperienceDetails(event, item, lifeStatus) {
    this.navCtrl.push('ExperienceDetailsPage', {
      item: item,
      lifeStatus: lifeStatus
    });
  }

  addStories(ownerId, urnType, roleId, beaconPaired) {
    this.lifeStoryAddStoryModal = this.modalCtrl.create("AddStoryPage", { ownerId: ownerId, urnType: urnType, roleId: roleId, beaconPaired: beaconPaired, ownerName: this.ownerName });
    this.lifeStoryAddStoryModal.present();
  }

  // showThisLink(link) {
  //   const browser = this.iab.create('https://ionicframework.com/');

  //   // browser.executeScript(...);
  //   // browser.insertCSS(...);
  //   // browser.close();
  // }

  showGallery(images) {
    // this.navCtrl.push(GalleryPage, {data: images});

    // let modal = this.modalCtrl.create(GalleryPage, {data: images});
    // modal.present();
    // console.log(images);
  }

  checkUpdate() {
    let selectedTab = this.tabRef.getSelected();
    //alert('........4');

  }

  shareStory() {
    var iosStoreUrl = 'https://itunes.apple.com/us/app/modurn/id1267728410?ls=1&mt=8';
    var androidStoreUrl = 'https://play.google.com/store/apps/details?id=com.modurn';

    if (this.lifeStoryData.beaconPaired) {
      this.storage.get("userData").then((result) => {
        if (result) {
          var urlString = this.config.shareUrl() + "deeplinking/index.html?lifestoryId=" + this.lifeStoryData.ownerId;

          // if(this.lifeStoryData.ownerName){
          var createrName = this.lifeStoryData.creatorName ? this.lifeStoryData.creatorName : result.userInfoModel.userName
          console.log("Creater Name: ", createrName);
          // }

          // this code is to use the social sharing plugin

          // old message
          // var message = "Hi " + " \n\nYou have been invited to be added as a Viewer for "+ this.lifeStoryData.ownerName +  " lifestory by " + result.userInfoModel.userName + "\n\n"+urlString+"\n\n--\nRegards\nTeam Modurn";

          // New Message
          var message = "Hello, you're invited with warmth and enthusiasm to view and celebrate the life story of " + this.lifeStoryData.ownerName + " created by " + createrName + "\n\nStep 1:  You will need to download the FREE modUrn App and sign up for a Free account at the Apple/Google Play store. The link to the App is at the very bottom of this message.\n\nStep 2: Once the App is downloaded press on the link directly below to view the life story.\n\n "+ urlString +"\n\n We hope that you will enjoy getting to know " + this.lifeStoryData.ownerName + " that little bit better and thank you for being an important part of the journey. " + "\n\n\nLinks to App downloads: "+"\n\niOS- "+iosStoreUrl+"\n\nAndroid- "+androidStoreUrl + "\n\nBest Regards,\nTeam modUrn" + "\n\n“My life is my message”   Gandhi";

          // message, subject, file, url
          //this.socialSharing.share(this.lifeStoryData.ownerName + " want to share his life story with you", "modUrn LifeStory", this.lifeStoryData.defaultThumbImage200,urlString)

          // Old message
          this.socialSharing.share(message, "Invitation to Join a Life story", null, null)

            .then(() => {
              // Success
            })
            .catch(() => {
            });


        } else {
          console.log("else result");
        }
      });
    } else {
      //Email is already existed as app user but not viewer
      var message = "";
      this.alertService.presentAlertWithCallback('Alert!', 'Hello! To share or invite your family and friends to this life story please select YES below or contact your local supplier to view our memento or modUrn range. Thank you.').then((yes) => {
        if (yes) {
          this.inAppBrowserOpen(Constant.websiteUrl);
        }


      });
    }

  }

  inAppBrowserOpen(link) {
    //debugger
    console.log(link);
    try {
      const browser = this.inAppBrowser.create(link, '_blank', 'location=yes');
      console.log("IN App Browser Object: ", this.inAppBrowser.create(link, '_blank', 'location=yes'));
    }
    catch (e) {
      console.log('Invalid Url');
      this.alertService.presentAlert('Info', 'Invalid Url')
    }
  }

  goBack() {
    this.navCtrl.setRoot('HomePage');
  }
}
