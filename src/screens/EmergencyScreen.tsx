import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const EmergencyScreen = () => {
  const navigation = useNavigation();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    bleeding: null,
    unconscious: null,
    breathing: null,
  });

  const questions = [
    {
      key: 'bleeding',
      question: 'Is the patient bleeding?',
    },
    {
      key: 'unconscious',
      question: 'Is the patient unconscious?',
    },
    {
      key: 'breathing',
      question: 'Is the patient breathing normally?',
    },
  ];

  const handleAnswer = (key: string, value: boolean) => {
    const updatedAnswers: any = { ...answers, [key]: value };
    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Final decision
      if (
        updatedAnswers.unconscious === true &&
        updatedAnswers.breathing === false
      ) {
        navigation.navigate('CPRScreen' as never);
      } else {
        setStep(questions.length); // show steps
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Emergency" />

      {/* QUESTION MODAL */}
      <Modal visible transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {step < questions.length ? (
              <>
                <Text style={styles.questionText}>
                  {questions[step].question}
                </Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={[styles.btn, styles.yesBtn]}
                    onPress={() => handleAnswer(questions[step].key, true)}
                  >
                    <Text style={styles.btnText}>YES</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.btn, styles.noBtn]}
                    onPress={() => handleAnswer(questions[step].key, false)}
                  >
                    <Text style={styles.btnText}>NO</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <ScrollView>
                <Text style={styles.stepsTitle}>First Aid Steps</Text>

                <Text style={styles.step}>• Keep the patient calm</Text>
                <Text style={styles.step}>
                  • Apply pressure to stop bleeding
                </Text>
                <Text style={styles.step}>
                  • Lay patient on side if unconscious
                </Text>
                <Text style={styles.step}>
                  • Call emergency services immediately
                </Text>

                <TouchableOpacity
                  style={styles.closeBtn}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={{ color: '#fff' }}>CLOSE</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    marginTop: 30,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  yesBtn: {
    backgroundColor: 'green',
  },
  noBtn: {
    backgroundColor: 'red',
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  step: {
    fontSize: 15,
    marginVertical: 6,
  },
  closeBtn: {
    backgroundColor: '#0F2854',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});
