import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Checkbox from "./Checkbox";
import Colors from "../constants/Colors";
import DatePicker from 'react-datepicker'
import '../node_modules/react-datepicker/dist/react-datepicker.css'

const EditableText = ({isChecked, onChangeText, text, isNewItem}) => {
  const [isEditMode, setEditMode] = useState(isNewItem);
  
  return (<TouchableOpacity onPress={() => !isChecked && setEditMode(true)}>
      {isEditMode ?
        <TextInput
          underlineColorAndroid={"transparent"}
          selectingColor={"transparent"}
          autoFocus={true}
          Value={text}
          onChangeText={onChangeText}
          placeholder={"Add new item here"}
          onSubmitEditing={() => {}}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
         // onBlur={() => setEditMode(false)}
        /> 
         :
      <Text style={[styles.text,
          {color: isChecked ? Colors.lightGray : Colors.black,
           textDecoration: isChecked ? "line-through" : "none"
          }
         ]
        }
      >{text}</Text>
    }
  </TouchableOpacity>);
}

const DueDate = ({isChecked, isNewItem}) => {
    const [isEditMode, setEditMode] = useState(isNewItem);
    const [selectedDueDate, setDueDate] = useState();
   
   return (<TouchableOpacity onPress={() => !isChecked && setEditMode(true)}>
    {
        <DatePicker
           placeholder={"Select Due Date"} 
           selected={selectedDueDate}
           onChange={(date) => setDueDate(date)}
           dateFormat='MM/dd/yyyy'
           minDate={new Date()}
           showYearDropdown
           scrollableYearDropdown
           isClearable
           onSubmitEditing={() => {}}
      />
    }
  </TouchableOpacity>);
}

export default ({text, isChecked, onChecked, onChangeText, onDelete, isNewItem, selectedDueDate}) => {

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", flex: 1}}>
          <Checkbox isChecked={isChecked} onChecked={onChecked}/>
          <EditableText
              text={text}
              onChangeText={onChangeText}
              isChecked={isChecked}
              isNewItem={isNewItem}
           />
            <DueDate selectedDueDate={selectedDueDate}/>
        </View>
        <TouchableOpacity onPress = {onDelete}>
            <Text style={[styles.icon, {color:Colors.red}]}>X</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    icon: {
        padding: 5,
        fontSize: 16,
    },
    input: {
        color: Colors.black,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 25,
        fontSize: 16,
    },
    text: {
        padding: 3,
        fontSize: 16,
    },
    
});
