import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import {width} from '../../styles/responsiveDesign';
import moment from 'moment';
import navigationStrings from '../../constants/navigationStrings';

export class Logs extends Component {
  state = {
    data: [
      {
        text: 'Lorem ipsum dolor sit amet,',
        date: '22/03/2022 12:45:23',
      },
      {
        text: 'Lorem ipsum dolor sit amet,',
        date: '23/03/2022  14:16:53',
      },
    ],
  };

  renderItem = data => {
    let {item} = data;
    return (
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() =>
          this.props.navigation.navigate(navigationStrings.KEY_DETAIL)
        }>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 0.7}}>
          <Image
            source={imagePath.keyRowImage}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              marginHorizontal: 10,
            }}
          />
          <View
            style={{
              marginLeft: 8,
            }}>
            <Text style={styles.rowText}>{item.text}</Text>
            <Text style={styles.rowTextSecondary}>
              {moment(item.date, 'DD/MM/YYYY HH:mm:SS').format(
                'MMM D, YYYY HH:mm:SS',
              )}
            </Text>
          </View>
        </View>
        <View
          style={{flex: 0.3, alignItems: 'flex-end', justifyContent: 'center'}}>
          <Image
            source={imagePath.rightIconGrey}
            style={{width: 15, height: 15, resizeMode: 'contain'}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let {data} = this.state;
    return (
      <WrapperContainer statusBarColor={colors.themeColor} bgColor="#f3f3f3">
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={imagePath.leftIconWhite} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headingText}>Keys</Text>
          <View style={{width: 25, height: 25}} />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.mainImageContainer}>
            <Image source={imagePath.keyHeaderImage} style={styles.mainImage} />
          </View>
          <Text style={styles.mainText}>
            A unique private key is generated and stored on your device each
            time you secfure a new account with Super Gluu
          </Text>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            ItemSeparatorComponent={() => (
              <View
                style={{backgroundColor: colors.blackOpacity10, height: 1}}
              />
            )}
          />
        </View>
      </WrapperContainer>
    );
  }
}

export default Logs;
