import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState('#b6e4e7ff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRelativeLuminance = (r, g, b) => {
  const toLinear = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const R = toLinear(r);
  const G = toLinear(g);
  const B = toLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};
  const getContrastRatio = (lum1, lum2) => {
  const L1 = Math.max(lum1, lum2);
  const L2 = Math.min(lum1, lum2);
  return (L1 + 0.05) / (L2 + 0.05);
};
  const getTextColor = (hex) => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);


  const bgLuminance = getRelativeLuminance(r, g, b);
  const whiteContrast = getContrastRatio(bgLuminance, getRelativeLuminance(255, 255, 255));
  const blackContrast = getContrastRatio(bgLuminance, getRelativeLuminance(0, 0, 0));

  return whiteContrast > blackContrast ? '#FFFFFF' : '#000000';
};

  const darkenColor = (hex, amount = 30) => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  const r = Math.max(0, parseInt(hex.substring(0, 2), 16) - amount);
  const g = Math.max(0, parseInt(hex.substring(2, 4), 16) - amount);
  const b = Math.max(0, parseInt(hex.substring(4, 6), 16) - amount);

  const toHex = (c) => c.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;}
  const changeBackground = () => {
    setBgColor(getRandomColor());
  };

  let textColor = getTextColor(bgColor);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Hello!</Text>
      <Text style={{ color: textColor }}>Background color is currently:</Text>

      <View style={{ backgroundColor: darkenColor(bgColor), marginTop: 10, borderRadius: 50, padding: 10 }}>
        <Text style={{ color: textColor, textAlign: 'center' }}>{bgColor}</Text>
      </View>

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={changeBackground}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3dPWFXn3b6omEcbOOLWQBCCOS-UI4GKBZg&s',
          }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            borderColor: darkenColor(bgColor),
            borderWidth: 3,
          }}
        />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      <Text style={{ color: textColor, backgroundColor: darkenColor(bgColor), marginTop: 10, borderRadius: 50, padding: 10 }}>made by Erick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
  },
});