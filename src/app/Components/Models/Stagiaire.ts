export interface Stagiaire{ 
     id:number;
     nom:String;
      prenom:String;
      email:String;
      cin:String;
      tel:String;
      etablissment:String;
      date:String;
      idstage:number; 
      idencadrent:number;
 }
  export interface Absent{    
      cin:String;
      stagiaire:Stagiaire;
      date_debut:Date;
      date_fin:Date;
     justification:String;
     
 } 
 export interface Division{    
    id:number;
    nom_Div:String;
} 
export interface Encadrant{    
    nom:String;
    prenom:String;
    email:String;
    in:String;
    tel:String;
    idDivision:number;
}      
export interface Stage{    
    id:number;
    sujet:String;
    date_debut:Date;
    date_fin:Date;
} 
 
export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    roles:string;
    isAuthanticated:boolean;
  }