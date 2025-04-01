import { useRef, useState } from "react"


const useScore = () => {

    const [geoPuzzleScore, setGeoPuzzleScore] = useState<number | null>(0)
    const [geoLayerScore, setGeoLayerScore] = useState<number | null>(0)
    const [wordPuzzleScore, setWordPuzzleScore] = useState<number | null>(0)
    // geo puzzle
      // Use useState instead of useRef for reactive updates
  const [geoPuzzle1, setGeoPuzzle1] = useState("");
  const [geoPuzzle2, setGeoPuzzle2] = useState("");
  const [geoPuzzle3, setGeoPuzzle3] = useState("");
  const [geoPuzzle4, setGeoPuzzle4] = useState("");
  const [geoPuzzle5, setGeoPuzzle5] = useState("");
  
  const [geolayer1, setGeoLayer1] = useState("");
  const [geolayer3, setGeoLayer2] = useState("");
  const [geolayer4, setGeoLayer3] = useState("");
  const [geolayer5, setGeoLayer4] = useState("");

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
        setGeoLayer1,
        setGeoLayer2,
        setGeoLayer3,
        setGeoLayer4,
        setGeoLayerScore,
        geoLayerScore,
        wordPuzzleScore,
        setWordPuzzleScore,
    }
}


export default useScore;