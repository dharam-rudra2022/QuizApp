
 import React, { FC } from 'react';
import { useEffect } from 'react';
 import {
   SafeAreaView,
     StyleSheet,
   Text,
   TouchableOpacity,
 } from 'react-native';
 
 interface Title{
  key:number
  answer:string,
  onPress:()=>void,
  correct:boolean,
  disabled:boolean,
 }

 const Buttons: FC<Title>=(props) => {

  useEffect(()=>{
    },[])
   return (
     <SafeAreaView >
     <TouchableOpacity style={{backgroundColor:!props.disabled?'#008000':'#FF0000',width:"80%",elevation:5,justifyContent:'center',alignContent:'center',marginLeft:27,height:38,marginTop:10}} onPress={()=>{props.onPress()}}>
         <Text style={[styles.textstyle,{color:props.correct?'grey':'white'}]}>{props.answer}</Text>
     </TouchableOpacity>
     </SafeAreaView>
   );
 };
 
 const styles=StyleSheet.create({
     textstyle:{
         textAlign:'left',
         fontSize:15,
         marginLeft:8,
    
         
     }
 })
 
 
 export default Buttons;
 