import React, { FC, memo } from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { WIDTH } from '../../core/constants';
import HeaderStyles from './Header.styles';
import { StoryHeaderProps } from '../../core/dto/componentsDTO';
import Close from '../Icon/close';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StoryHeader: FC<StoryHeaderProps> = ( {
    imgUrl, name, onClose, avatarSize, textStyle, buttonHandled, closeColor, onAvatarPress, headerStyle, headerContainerStyle,
} ) => {

  const styles = { width: avatarSize, height: avatarSize, borderRadius: avatarSize };
  const width = WIDTH - HeaderStyles.container.left * 2;

  const handleOnAvatarPress = () =>{
      onAvatarPress?onAvatarPress():null;
  }

  return (
    <View style={[ HeaderStyles.container, { width } ]}>
          <TouchableOpacity style={HeaderStyles.left, headerStyle}
                        onPress={handleOnAvatarPress}
                        hitSlop={16}
                        testID="avatarButton"
                        onPressIn={() => {buttonHandled.value = true;}}
      >
        {Boolean( imgUrl ) && (
          <View style={[ HeaderStyles.avatar, { borderRadius: styles.borderRadius } ]}>
            <Image source={{ uri: imgUrl }} style={styles} />
          </View>
        )}
        {Boolean( name ) && <Text style={textStyle}>{name}</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onClose}
        hitSlop={8}
        testID="storyCloseButton"
      >
        <Close color={closeColor} />
      </TouchableOpacity>
    </View>
  );

};

export default memo( StoryHeader );
