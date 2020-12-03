import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { DateTimePicker_3: new Date(""), Switch_4: true }
  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_3}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_3: selectedDate })
        }
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_4}
        value={this.state.Switch_4}
        onValueChange={nextChecked => this.setState({ Switch_4: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_2: {},
  DateTimePicker_3: {},
  Switch_4: { alignSelf: "flex-start" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
