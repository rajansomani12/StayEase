import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native';

const LoginOptionModal = ({ isVisible, onClose, children }) => {
  const slideAnim = new Animated.Value(300); // Initial position of the modal (300 is off-screen)

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0, // Final position of the modal
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300, // Position off-screen
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Modal
      transparent
      animationType="none"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}/>
      <Animated.View style={[styles.modalContainer, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.modalContent}>
          {children}
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  modalContent: {
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginOptionModal;
