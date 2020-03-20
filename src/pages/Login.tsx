import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './Page.css';

const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  //console.log(match);
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          </IonButtons>
          <IonTitle>LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Do Login now</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonCard> 
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="fixed">Username</IonLabel>
                <IonInput value="" placeholder="Enter Input" autocomplete="off" autofocus></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Password</IonLabel>
                <IonInput value="" placeholder="Enter Input" type="password" autocomplete="off"></IonInput>
              </IonItem>
              <br/>
              <IonButton expand="block" fill="outline">Login</IonButton>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page;
