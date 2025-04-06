import { useRouter } from "expo-router";
import useAchievements from "./useAchievements";
import useScore from "./useScore";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useHandleClicks = () => {

    const router = useRouter();
    const {addAchievement, setAchievements} = useAchievements();
      const [geoPuzzleScore, setGeoPuzzleScore] = useState<number>(0)
    
        // geo puzzle
          // Use useState instead of useRef for reactive updates
      const [geoPuzzle1, setGeoPuzzle1] = useState("");
      const [geoPuzzle2, setGeoPuzzle2] = useState("");
      const [geoPuzzle3, setGeoPuzzle3] = useState("");
      const [geoPuzzle4, setGeoPuzzle4] = useState("");
      const [geoPuzzle5, setGeoPuzzle5] = useState("");
    
      async function handleFinalGeoPuzzleScore() {
        // if state doesn't work, use AsyncStorage
        const puzzleAnswer1 = await AsyncStorage.getItem('puzzleAnswer1')
        const puzzleAnswer2 = await AsyncStorage.getItem('puzzleAnswer2')
        const puzzleAnswer3 = await AsyncStorage.getItem('puzzleAnswer3')
        const puzzleAnswer4 = await AsyncStorage.getItem('puzzleAnswer4')
        const puzzleAnswer5 = await AsyncStorage.getItem('puzzleAnswer5')
        console.log(puzzleAnswer1)
        console.log(puzzleAnswer2)

        if (puzzleAnswer1 === "Normal Fault") {
          setGeoPuzzleScore((prevScore) => prevScore! + 2);
        }
    
        if (puzzleAnswer2 === "Earthquake") {
            setGeoPuzzleScore((prevScore) => prevScore! + 2);
        }
    
        if (puzzleAnswer3 === "Hanging Wall") {
            setGeoPuzzleScore((prevScore) => prevScore! + 2);
        }
    
        if (puzzleAnswer4 === "Reverse Fault") {
            setGeoPuzzleScore((prevScore) => prevScore! + 2);
        }
    
        if (puzzleAnswer5 === "Seismic Activity") {
            setGeoPuzzleScore((prevScore) => prevScore! + 2);
        }

        await AsyncStorage.setItem('geoPuzzleFinalScore', geoPuzzleScore.toString())
      }

    const handlePlayGamePress = () => {
        router.push("/Choose");
    };

    const handleOrganellesPress1 = () => {
        router.push("/theorganelles2");
    };

    const handleOrganellesPress2 = () => {
        router.push("/theorganelles3");
    };

    const handleOrganellesPress3 = () => {
        router.push("/theorganelles4");
    };

    const handleOrganellesPress4 = () => {
        router.push("/theorganelles5");
    };

    const handleOrganellesPress5 = () => {
        router.push("/theorganellesscore");
    };

    const handleOrganellesPress = () => {
        router.push("/theorganelles1");
    };

    const handleAchievementPress = () => {
        router.push("/achievements");
    };

    const handleChemistryPress = () => {
        router.push("/chemistry");
    };

    const handleBiologyPress = () => {
        router.push("/biology");
    };

    const handlePhysicsPress = () => {
        router.push("/physics");
    };

    const handleEarthSciPress = () => {
        router.push("/earthsci");
    };

    

    const handleGeoPuzzlePress = () => {
        console.log(1)
        router.push("/puzzlefirst");
    }

    const handleBioPicsPress = () => {
        router.push("/readingscalar");
    }

    const handleNextBioPicsPress = () => {
        router.push("/scalar");
    }

    const handleNextBioPicsPress2 = () => {
        router.push("/scalar2");
    }

    const handleNextBioPicsPress3 = () => {
        router.push("/scalar3");
    }

    const handleNextBioPicsPress4 = () => {
        router.push("/scalar4");
    }

    const handleNextBioPicsPress5 = () => {
        router.push("/scalar5");
    }

    const handleScalarSubmitPress = () => {
        router.push("/scalarscore");
    }

    const handleTypesOfForcwePress = () => {
        router.push("/typesofforce1" as any);
    }

    const handleTypesOfForcwePress2 = () => {
        router.push("/typesofforce2" as any);
    }

    const handleTypesOfForcwePress3 = () => {
        router.push("/typesofforce3" as any);
    }

    const handleTypesOfForcwePress4 = () => {
        router.push("/typesofforce4" as any);
    }

    const handleTypesOfForcwePress5 = () => {
        router.push("/typesofforce5" as any);
    }

    const handleTypesOfForcwePress6 = () => {
        router.push("/typesofforce6" as any);
    }

    const handleTypesOfForcwePress7 = () => {
        router.push("/typesofforce7" as any);
    }

    const handleTypesOfForcwePress8 = () => {
        router.push("/typesofforce8" as any);
    }

    const handleTypesOfForcwePres9 = () => {
        router.push("/typesofforce9" as any);
    }

    const handleTypesOfForcwePres10 = () => {
        router.push("/typesofforce10" as any);
    }

    const handle4Pics1WordPress = () => {
        router.push("/picsword1" as any);
    }

    const handleNext4Pics1WordPress1 = () => {
        router.push("/picsword2" as any);
    }

    const handleNext4Pics1WordPress2 = () => {
        router.push("/picsword3" as any);
    }

    const handleNext4Pics1WordPress3 = () => {
        router.push("/picswordscore" as any);
    }


    const handleTypesOfForceSubmit = () => {
        router.push("/typesofforcescore" as any);
    }


    const ChemQuizPress = () => {
        router.push("/chemmultiple1" as any);
    }

    const ChemQuizPress1 = () => {
        router.push("/chemmultiple2" as any);
    }

    const ChemQuizPress2 = () => {
        router.push("/chemmultiple3" as any);
    }

    const ChemQuizPress3 = () => {
        router.push("/chemmultiple4" as any);
    }

    const ChemQuizPress4 = () => {
        router.push("/chemmultiple5" as any);
    }

    const ChemQuizPress5 = () => {
        router.push("/chemmultiple6" as any);
    }

    const ChemQuizPress6 = () => {
        router.push("/chemmultiple7" as any);
    }

    const ChemQuizPress7 = () => {
        router.push("/chemmultiple8" as any);
    }

    const ChemQuizPress8 = () => {
        router.push("/chemmultiple9" as any);
    }

    const ChemQuizPress9 = () => {
        router.push("/chemmultiple10" as any);
    }

    const ChemQuizPress10 = () => {
        router.push("/chemmultiplescore" as any);
    }

    const handleBioQuizPress = () => {
        router.push("/plantmultiplechoice1" as any);
    }

    const handleBioQuizPress1 = () => {
        router.push("/plantmultiplechoice2" as any);
    }

    const handleBioQuizPress2 = () => {
        router.push("/plantmultiplechoice3" as any);
    }

    const handleBioQuizPress3 = () => {
        router.push("/plantmultiplechoice4" as any);
    }

    const handleBioQuizPress4 = () => {
        router.push("/plantmultiplechoice5" as any);
    }

    const handleBioQuizPress5 = () => {
        router.push("/plantmultiplechoice6" as any);
    }

    const handleBioQuizPress6 = () => {
        router.push("/plantmultiplechoice7" as any);
    }

    const handleBioQuizPress7 = () => {
        router.push("/plantmultiplechoice8" as any);
    }

    const handleBioQuizPress8 = () => {
        router.push("/plantmultiplechoice9" as any);
    }

    const handleBioQuizPress9 = () => {
        router.push("/plantmultiplechoice10" as any);
    }

    const handleBioQuizPress10 = () => {
        router.push("/plantmultiplechoice11" as any);
    }

    const handleBioQuizPress11 = () => {
        router.push("/plantmultiplechoice12" as any);
    }

    const handleBioQuizPress12 = () => {
        router.push("/plantmultiplechoice13" as any);
    }

    const handleBioQuizPress13 = () => {
        router.push("/plantmultiplechoice14" as any);
    }

    const handleBioQuizPress14 = () => {
        router.push("/plantmultiplechoice15" as any);
    }

    const handleBioQuizPress15 = () => {
        router.push("/plantmultiplechoicescore" as any);
    }



   
    
    const handleMatterMatchPress1 = () => {
        router.push("/mattermatch1" as any);
    };
    
    const handleMatterMatchPress2 = () => {
        router.push("/mattermatch2" as any);
    };
    
    const handleMatterMatchPress3 = () => {
        router.push("/mattermatch3" as any);
    };
    
    const handleMatterMatchPress4 = () => {
        router.push("/mattermatch4" as any);
    };
    
    const handleMatterMatchPress5 = () => {
        router.push("/mattermatch5" as any);
    };
    
    const handleMatterMatchPress6 = () => {
        router.push("/mattermatch6" as any);
    };
    
    const handleMatterMatchPress7 = () => {
        router.push("/mattermatch7" as any);
    };
    
    const handleMatterMatchPress8 = () => {
        router.push("/mattermatch8" as any);
    };
    
    const handleMatterMatchPress9 = () => {
        router.push("/mattermatch9" as any);
    };
    
    const handleMatterMatchPress10 = () => {
        router.push("/mattermatch10" as any);
    };
    
    const handleMatterMatchPress11 = () => {
        router.push("/mattermatch11" as any);
    };
    
    const handleMatterMatchPress12 = () => {
        router.push("/mattermatch12" as any);
    };
    
    const handleMatterMatchPress13 = () => {
        router.push("/mattermatch13" as any);
    };
    

    const handleMatterMatchPress14 = () => {
        router.push("/mattermatch14" as any);
    }

    
    
    const handleMatterMatchPress15 = () => {
        router.push("/mattermatch15" as any);
    };
    
    const handleMatterMatchPress16 = () => {
        router.push("/mattermatch16" as any);
    };
    
    const handleMatterMatchPress17 = () => {
        router.push("/mattermatch17" as any);
    };
    
    const handleMatterMatchPress18 = () => {
        router.push("/mattermatch18" as any);
    };
    
    const handleMatterMatchPress19 = () => {
        router.push("/mattermatch19" as any);
    };
    
    const handleMatterMatchPress20 = () => {
        router.push("/mattermatch20" as any);
    };
    
    const handleMatterMatchPress21 = () => {
        router.push("/mattermatchscore" as any);
    };

    const handleGeoFirstPuzzlePress = async () => {
        await AsyncStorage.setItem('puzzleAnswer1', geoPuzzle1)
        router.push("/puzzlesecond");
    }

    const handleGeoSecondPuzzlePress = async () => {
        await AsyncStorage.setItem('puzzleAnswer2', geoPuzzle2)

        router.push("/puzzlethird");
    }

    const handleGeoThirdPuzzlePress = async () => {
        await AsyncStorage.setItem('puzzleAnswer3', geoPuzzle3)

        router.push("/puzzlefourth");
    }

    const handleGeoFourthPuzzlePress = async () => {
        await AsyncStorage.setItem('puzzleAnswer4', geoPuzzle4)

        router.push("/puzzlefifth");
    }

    const handleGeoSubmitPuzzlePress = async () => {
        await AsyncStorage.setItem('puzzleAnswer5', geoPuzzle5)
        handleFinalGeoPuzzleScore()
        addAchievement("Puzzle Monster")
        console.log("Added Achievement")
        router.push("/geopuzzlescore");
    }

    const handleGoBackPress = () => {
        router.push("/Choose");
    }

    const handleWordPuzzlePress = () => {
        router.push("/wordsearchpuzzle");
    }

    const handleQuakePreparePress = () => {
        router.push("/quakeprepare1");
    }  
    
    const handleQuakePrepare2Press = () => {
        router.push("/quakeprepare2");
    }  

    const handleQuakePrepare3Press = () => {
        router.push("/quakeprepare3");
    }  
    
    const handleGeoLayerPress = () => {

        router.push("/geolayer");
    }

    return {
        handleGeoLayerPress,
        handlePlayGamePress,
        handleAchievementPress,
        handleChemistryPress,
        handleBiologyPress,
        handlePhysicsPress,
        handleEarthSciPress,
        handleGeoFirstPuzzlePress,
        handleGeoSecondPuzzlePress,
        handleGeoThirdPuzzlePress,
        handleGeoFourthPuzzlePress,
        handleGeoPuzzlePress,
        handleGeoSubmitPuzzlePress,
        handleGoBackPress,
        geoPuzzleScore,
        setGeoPuzzleScore,
        geoPuzzle1,
        setGeoPuzzle1,
        geoPuzzle2,
        setGeoPuzzle2,
        geoPuzzle3,
        setGeoPuzzle3,
        geoPuzzle4,
        setGeoPuzzle4,
        geoPuzzle5,
        setGeoPuzzle5,
        handleWordPuzzlePress,
        handleQuakePreparePress,
        handleQuakePrepare2Press,
        handleQuakePrepare3Press,
        handleBioPicsPress,
        handleNextBioPicsPress,
        handleNextBioPicsPress2,
        handleNextBioPicsPress3,
        handleNextBioPicsPress4,
        handleNextBioPicsPress5,
        handleScalarSubmitPress,
        handleTypesOfForcwePress,
        handleTypesOfForcwePres10,
        handleTypesOfForcwePres9,
        handleTypesOfForcwePress8,
        handleTypesOfForcwePress7,
        handleTypesOfForcwePress6,
        handleTypesOfForcwePress5,
        handleTypesOfForcwePress4,
        handleTypesOfForcwePress3,
        handleTypesOfForcwePress2,
        handleTypesOfForceSubmit,
        handle4Pics1WordPress,
        handleNext4Pics1WordPress1,
        handleNext4Pics1WordPress2,
        handleNext4Pics1WordPress3,
        handleBioQuizPress,
        handleBioQuizPress1,
        handleBioQuizPress2,
        handleBioQuizPress3,
        handleBioQuizPress4,
        handleBioQuizPress5,
        handleBioQuizPress6,
        handleBioQuizPress7,
        handleBioQuizPress8,
        handleBioQuizPress9,
        handleBioQuizPress10,
        handleBioQuizPress11,
        handleBioQuizPress12,
        handleBioQuizPress13,
        handleBioQuizPress14,
        handleBioQuizPress15,
        ChemQuizPress1,
        ChemQuizPress2,
        ChemQuizPress3,
        ChemQuizPress4,
        ChemQuizPress5,
        ChemQuizPress6,
        ChemQuizPress7,
        ChemQuizPress8,
        ChemQuizPress9,
        ChemQuizPress10,
        ChemQuizPress,
        handleOrganellesPress,
        handleOrganellesPress1,
        handleOrganellesPress2,
        handleOrganellesPress3,
        handleOrganellesPress5,
        handleOrganellesPress4,
        handleMatterMatchPress1,
        handleMatterMatchPress2,
        handleMatterMatchPress3,
        handleMatterMatchPress4,
        handleMatterMatchPress5,
        handleMatterMatchPress6,
        handleMatterMatchPress7,
        handleMatterMatchPress8,
        handleMatterMatchPress9,
        handleMatterMatchPress10,
        handleMatterMatchPress11,
        handleMatterMatchPress12,
        handleMatterMatchPress13,
        handleMatterMatchPress14,
        handleMatterMatchPress15,
        handleMatterMatchPress16,
        handleMatterMatchPress17,
        handleMatterMatchPress18,
        handleMatterMatchPress19,
        handleMatterMatchPress20,
        handleMatterMatchPress21,



    };
};

export default useHandleClicks;
