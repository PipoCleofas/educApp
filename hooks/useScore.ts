import { useRef, useState } from "react"


const useScore = () => {

    const [geoPuzzleScore, setGeoPuzzleScore] = useState<number | null>(0)
    const [geoLayerScore, setGeoLayerScore] = useState<number | null>(0)
    const [wordPuzzleScore, setWordPuzzleScore] = useState<number | null>(0)
    const [scalarScore, setScalarScore] = useState<number | null>(0)
    const [contactForceScore, setContactForceScore] = useState<number | null>(0)
    const [picsWordScore, setPicsWordScore] = useState<number | null>(0)
    const [oneToFifteenScore, setOneToFifteenScore] = useState<number | null>(0)
    // geo puzzle
      // Use useState instead of useRef for reactive updates
  const [geoPuzzle1, setGeoPuzzle1] = useState("");
  const [geoPuzzle2, setGeoPuzzle2] = useState("");
  const [geoPuzzle3, setGeoPuzzle3] = useState("");
  const [geoPuzzle4, setGeoPuzzle4] = useState("");
  const [geoPuzzle5, setGeoPuzzle5] = useState("");


    return{
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
        setGeoLayerScore,
        geoLayerScore,
        wordPuzzleScore,
        setWordPuzzleScore,
        scalarScore,
        setScalarScore,
        contactForceScore,
        setContactForceScore,
        picsWordScore,
        setPicsWordScore,
        oneToFifteenScore,
        setOneToFifteenScore,
    }
}


export default useScore;