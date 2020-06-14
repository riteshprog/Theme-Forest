import React, { Component } from 'react'

export default class GoogleData extends Component {
  constructor(props){
    super(props);
    this.state = {
      "weightage": {

                     "bodylanguage": 17,

                     "voice": 17,

                     "custom_ruler": 17,

                     "facialexpression": 17,

                     "words": 17,

                     "confidence": 15

      },

      "bodylanguage": {

                     "posture": 2.4000000000000004,

                     "posture_percentage": 80,

                     "Gesture": 2.4000000000000004,

                     "Gesture_percentage": 80,

                     "Moves": 2.4000000000000004,

                     "Moves_percentage": 80,

                     "Stagegreet": 0,

                    "Stagegreet_percentage": 0

      },

      "voice": {

                     "wpm_score": 0.8,

                     "wpm_score_percentage": 20,

                     "pause": 2.4,

                     "pause_percentage": 60,

                     "energy_level": 2,

                     "energy_level_percentage": 50,

                     "quality": 4,

                     "quality_percentage": 100

      },

      "word_per_minute": {

                     "word_per_minute": 240

      },

      "facialexpression": {

                     "Neutral": 0,

                     "Neutral_percentage": 0,

                     "Laugh": 3,

                     "Laugh_percentage": 100,

                     "Emotion": 0,

                     "Emotion_percentage": 0,

                     "Eyeblink": 0,

                     "Eyeblink_percentage": 0,

                     "Eyecontact": 3,

                     "Eyecontact_percentage": 100

      },

      "words": {

                     "grammer_score": 0,

                     "grammer_score_percentage": 0,

                     "filler_score": 7.6,

                     "filler_score_percentage": 95

      },

      "custom_ruler": {

                     "entry_score": 0,

                     "entry_score_percentage": 0,

                     "question_score": 5,

                     "question_score_percentage": 100,

                     "gratitude_score": 0,

                     "gratitude_score_percentage": 0

      },

      "confidence": {

                     "confidence": 5.550000000000001,

                     "confidence_percentage": "185"

      },

      "hero_img": {

                     "hero_img": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/LIN10007060000000005hero_image.png"

      },

      "positive_snap": {

                     "url_smile": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/LIN10007060000000005frame_9.jpg",

                     "url_eye_contact": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/LIN10007060000000005frame_9.jpg",

                     "url_casual": "https://vidyatrailstore.blob.core.windows.net/input/Skeleton/output_skeleton/LIN10007060000000005frame_6.jpg",

                     "url_hand_move": "https://vidyatrailstore.blob.core.windows.net/input/Skeleton/output_skeleton/LIN10007060000000005frame_6.jpg",

                     "voice_energy_snap": "",

                     "voice_expressing_snap": ""

      },

      "negative_snap": {

                     "url_neutral": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/LIN10007060000000005frame_36.jpg",

                     "url_eye_blink": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/LIN10007060000000005frame_111.jpg",

                     "url_stand": "",

                     "url_hand_touch": "https://vidyatrailstore.blob.core.windows.net/input/Skeleton/output_skeleton/LIN10007060000000005frame_78.jpg",

                     "pause_clip": "https://vidyatrailstore.blob.core.windows.net/input/yn6jW6opRDeqkPMnbycZ_6N2Uvf5xStKPUkrS2Z6B_IIN30000000002_090039pause_clip_snap.jpg",

                     "voice_quality_snap": "https://vidyatrailstore.blob.core.windows.net/input/yn6jW6opRDeqkPMnbycZ_6N2Uvf5xStKPUkrS2Z6B_IIN30000000002_090039voice_quality_snap.jpg"

      },

      "positive_video": {

                     "smile_timestamp": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/video_9.mp4",

                     "eye_contact_timestamp": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/video_9.mp4",

                     "hand_move": "https://vidyatrailstore.blob.core.windows.net/input/Skeleton/output_skeleton/video_6.mp4",

                     "causal_pose": "",

                     "voice_energy": "",

                     "voice_expressing": ""

      },

      "negative_video": {

                     "neutral_timestamp": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/video_36.mp4",

                     "eyeblink_timestamp": "https://vidyatrailstore.blob.core.windows.net/input/Facial_Attribute/output/video_3.mp4",

                     "stand": "",

                     "handtouch": "https://vidyatrailstore.blob.core.windows.net/input/Skeleton/output_skeleton/video_78.mp4",

                     "pause_clip": "https://vidyatrailstore.blob.core.windows.net/input/Audio_Data_Analysis/output/yn6jW6opRDeqkPMnbycZ_6N2Uvf5xStKPUkrS2Z6B_IIN30000000002_090039pause_clip.mp4",

                     "voice_quality": "https://vidyatrailstore.blob.core.windows.net/input/Audio_Data_Analysis/output/yn6jW6opRDeqkPMnbycZ_6N2Uvf5xStKPUkrS2Z6B_IIN30000000002_090039voice_quality.mp4"

      },

      "overall_score": {

                     "overall_score": 35

      },

      "userinfo": {

                     "email": "test12@gmail.com",

                     "version": ""

      },
      tifOptions : [],


    }
  }


x = () => {for (const [key, value] of Object.entries(this.state)) {
  console.log(this.state.tifOptions)
    this.state.tifOptions.push(`{key}:{value}`);
}
}


  render() {
    console.log(this.states)
        const {bodylanguage} = this.state
console.log(bodylanguage)
    return (
      <div>
        <h1>Hellow GoogleData</h1>
        {Object.keys(bodylanguage).map((key, index)=>(
                <p key="index">{[`${key}`]}:{bodylanguage[key]}</p>
            ))}
              <div id="highcharts-WbGi0kXUv"><script src="https://app.everviz.com/inject/WbGi0kXUv/" defer="defer"></script></div>
                </div>
    )
  }
}
