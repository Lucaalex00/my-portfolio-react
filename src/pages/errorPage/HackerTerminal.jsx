import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ParticlesBg from "particles-bg";
import { Button } from '@mui/material'; // Importazione di Material UI Button
import './HackerTerminal.css'; // File CSS dove aggiungeremo l'animazione glitch


export default function TerminaleHacker() {
  // State for managing the terminal lines (commands and outputs displayed)
  const [lines, setLines] = useState([]);
  
  // State to track the current input in the terminal
  const [input, setInput] = useState('');
  
  // State to determine if the terminal is ready (after loading)
  const [isReady, setIsReady] = useState(false);

  // State to handle the terminal loading state
  const [isLoading, setIsLoading] = useState(true);

  // State for controlling whether the drawer (command list) is open or closed
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // States to track the status of the cut wires (red and blue)
  const [cutWires, setCutWires] = useState({ red: false, blue: false });

  // State to check if wires have been verified
  const [wiresChecked, setWiresChecked] = useState(false);

  // State to track if both wires have been cut
  const areWiresCut = cutWires.red && cutWires.blue;

  // Timer state to manage the countdown during certain actions
  const [timer, setTimer] = useState(100);

  // State to manage whether the timer has started or not
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  // State to check if the timer has expired
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  // State to block or allow input during specific actions
  const [isInputBlocked, setIsInputBlocked] = useState(false);

  // State for storing the list of unlocked commands
  const [unlockedCommands, setUnlockedCommands] = useState(['help']);
  
  // State to track whether the 'help' command has been used
  const [hasUsedHelp, setHasUsedHelp] = useState(false);

  // State to manage whether the secret phase (password game) is active
  const [isSecretPhaseActive, setIsSecretPhaseActive] = useState(false);

  // State to track whether the minigame (password) phase is active
  const [isMinigameActive, setIsMinigameActive] = useState(false);

  // State for storing the secret word used in the password minigame
  const [secretWord] = useState("admin");
  
  // State for managing the shuffled letters in the minigame
  const [shuffleWord, setShuffledWord] = useState("");

  // State to control the terminal reboot process
  const [isRebooting, setIsRebooting] = useState(false);
  
  // Reference to the terminal for scrolling
  const terminalRef = useRef(null);

  // State to track if the terminal has been started
  const [isTerminalStarted, setIsTerminalStarted] = useState(false);
  
  // Navigate Hook
  const navigate = useNavigate();

    //Commands' Responses
    const responses = {
      help: ["Comandi sbloccati."],
      'restore --portfolio': ["Ripristino in corso... Timer avviato."],
      whoami_machine: ["01000001 01001001 01010101 01010100 01001111."],
      whoami_ready: ["Chi sei?"],
      'cut --red': ["Filo rosso tagliato."],
      'cut --blue': ["Filo blu tagliato."],
      default: ["Comando sconosciuto. Digita 'help' per i comandi disponibili."]
    };
    
  /**
   * 
   * @param {String} type
   * Play Sound Function 
   */
    const playSound = (type) => {
      // Map for right paths
      const fileSound = {
        error: '/sounds/Error.mp3',
        success: '/sounds/Success.mp3',
        alert: '/sounds/Alert.mp3',
        loading: '/sounds/Loading.mp3',
      };
    
      // Check if type is valid or by default launch SUCCESS audio
      const soundPath = fileSound[type] || fileSound.success;
    
      // Set Audio object with 20% Volume
      const audio = new Audio(soundPath);
      audio.volume = 0.2;
    
      // Play Sound
      audio.play();
  };
  
  // SHELL INITIALIZE
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setLines(["██ BIOS SYSTEM v3.4.1", "Caricamento della shell sicura...", "Decriptazione dell'interfaccia..."]);
      setTimeout(() => setIsReady(true), 2500);
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(startTimer);
  }, []);

  // REBOOT SHUTDOWN
  useEffect(() => {
    if (isRebooting) {
      let delay = 1000;
      [3, 2, 1].forEach((n, i) => {
        setTimeout(() => {
          setLines(prev => [...prev, `${n}...`]);
        }, delay * (i + 1));
      });

      setTimeout(() => {
        setIsTerminalStarted(false);
        navigate('/');
      }, 4000);
    }
  }, [isRebooting]);

  // TERMINAL'S SCROLL UPDATE
  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [lines]);

  //HANDLE TIMER COUNTDOWN
  useEffect(() => {
    if (isTimerStarted && !isTimerExpired) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimerExpired(true);
            setIsInputBlocked(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerStarted]);

  /**
   * @param {String} cmd 
   * Unlock Commands
   */
  const unlockCommand = (cmd) => {
    setUnlockedCommands(prev => prev.includes(cmd) ? prev : [...prev, cmd]);
  };

  /**
   * @param {String} cmd 
   * Remove Commands
   */
  const removeCommand = (cmd) => {
    setUnlockedCommands(prev => prev.filter(c => c !== cmd));
  };

  /**
   * @param {Event} e 
   * Commands does actions with right sound or wrong sound
   * @returns Sounds
   */
  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isInputBlocked) {
      const cmd = input.trim().toLowerCase();
      setLines(prev => [...prev, `> ${cmd}`]);

      if (!unlockedCommands.includes(cmd) && (!cmd.startsWith('solve --') || !isSecretPhaseActive)) {
        playSound('error');
        setTimeout(() => setLines(prev => [...prev, responses.default[0]]), 500);
        setInput('');
        return;
      } else {
        playSound('success');
      }

      switch (cmd) {
        case 'help':
          setIsDrawerOpen(true);
          if (!hasUsedHelp) {
            setLines(prev => [...prev, responses.help[0]]);
            setHasUsedHelp(true);
            unlockCommand('whoami');
            unlockCommand('restore --portfolio');
          }
          break;

        case 'restore --portfolio':
          playSound('alert');
          unlockCommand('cut --red');
          unlockCommand('cut --blue');
          unlockCommand('check --wires');
          if (!isTimerStarted) {
            setIsTimerStarted(true);
            removeCommand('restore --portfolio');
          }
          setLines(prev => [...prev, responses['restore --portfolio'][0]]);
          break;

        case 'cut --red':
          setCutWires(prev => ({ ...prev, red: true }));
          removeCommand('cut --red');
          setLines(prev => [...prev, responses['cut --red'][0]]);
          break;

        case 'cut --blue':
          setCutWires(prev => ({ ...prev, blue: true }));
          removeCommand('cut --blue');
          setLines(prev => [...prev, responses['cut --blue'][0]]);
          break;

        case 'check --wires':
          setLines(prev => [
            ...prev,
            areWiresCut ? "✅ Controllo fili passato." : "❌ Fili non tagliati."
          ]);
          if (areWiresCut) {
            removeCommand('check --wires');
            unlockCommand('whoami');
            setWiresChecked(true);
          }
          break;

        case 'whoami': {
          const responseWhoami = (areWiresCut && wiresChecked)
            ? responses.whoami_ready[0]
            : responses.whoami_machine[0];

          setLines(prev => [...prev, responseWhoami]);

          if (areWiresCut && wiresChecked && !isSecretPhaseActive) {
            removeCommand('whoami');
            setTimeout(() => {
              setLines(prev => [
                ...prev,
                "[...]",
                "Segnale identificato.",
                "Decodifica iniziata...",
                "Messaggio in arrivo: ",
                "> Sei davvero tu ?.",
                "> Qual'è la parola d'ordine ?"
              ]);
            }, 1000);

            setIsSecretPhaseActive(true);

            setTimeout(() => {
              const letters = secretWord.split('').sort(() => Math.random() - 0.5).join('');
              setShuffledWord(letters);
              setIsMinigameActive(true);
              setLines(prev => [
                ...prev,
                `🧩 Inserisci la Password.`,
                `Lettere: ${letters}`,
                `Digita: solve --[password]`
              ]);
            }, 2000);
          }
          break;
        }

        case 'reload --force':
          window.location.reload();
          return;

        default:
          if (cmd.startsWith('solve --') && isMinigameActive) {
            const attempt = cmd.replace('solve --', '').trim().toLowerCase();

            if (attempt === secretWord) {
              playSound('success');
              setLines(prev => [
                ...prev,
                "✅ Password corretta...davvero ?",
                "✅ Accesso al nodo confermato.",
                "🔓 Terminale Sbloccato.",
                "Riavvio in corso...",
              ]);

              setIsMinigameActive(false);
              setIsRebooting(true);
            } else {
              playSound('error');
              setLines(prev => [...prev, "❌ Password errata. Riprova."]);
            }
          } else {
            setLines(prev => [...prev, responses.default[0]]);
          }
          break;
      }

      setInput('');
    }
  };

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  /**
   * @param {String} command 
   * Click on commands set a new input value
   */
  const handleCommandClick = (command) => {
    setInput(command);
    if (window.innerWidth < 768) {
      setIsDrawerOpen(false);
    }
  };

  /**
   * Start terminal from a click on a button
   */
  const startTerminal = () => {
    setIsTerminalStarted(true);
    setTimeout(() => {
      setLines(["██ BIOS SYSTEM v3.4.1", "Caricamento della shell sicura...", "Decriptazione dell'interfaccia..."]);
      setTimeout(() => setIsReady(true), 3000);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen max-h[] bg-black relative overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} color="#00ff00" num={100} />
      <style>{`
        .particles-bg-canvas-self {
          z-index: 0 !important;
          opacity: 0.5;
          height: 100vh !important;
          position: fixed !important;
          pointer-events: none;
        }
      `}</style>

      {/* Initialize terminal button */}
      {!isTerminalStarted && (
        <div className="absolute flex items-center justify-center w-full h-full z-50">
          <Button
            onClick={() => {
              // Sound with Timeout
              setTimeout(() => {
                playSound('loading'); // Loading Sound
              }, 500);
              startTerminal(); // START TERMINAL
            }}
            className={`glitch-button ${isTerminalStarted ? 'hidden' : ''}`}
            variant="contained"
            color="success"
            sx={{
              fontFamily: 'Gidori',
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              textTransform: 'none',
            }}
          >
            Avvia Terminale
          </Button>
        </div>
      )}

      {/* Terminal Content if isTerminalStarted is TRUE*/}
      {isTerminalStarted && (
        <>
          {/* Completamento del resto del terminale */}
          {isTimerStarted && !isTimerExpired && (
            <div className="absolute left-4 bottom-1 font-[Gidole] text-green-400 text-sm z-30">
              <ul>
                {!cutWires.red && (
                  <li className="flex items-center">
                    <span className="w-20 h-2 rounded-full bg-red-500 mr-2"></span>
                    Filo rosso
                  </li>
                )}
                {!cutWires.blue && (
                  <li className="flex items-center">
                    <span className="w-20 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Filo blu
                  </li>
                )}
              </ul>
            </div>
          )}


          {isTimerStarted && !isTimerExpired && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-black bg-yellow-200 py-1 px-3 rounded-2xl font-mono text-md z-30">⏳ {timer}s</div>
          )}

          {isLoading ? (
            <div className="text-green-400 font-mono text-md animate-pulse flex flex-col items-center">
              <div className="mb-4">Inizializzazione del terminale di sistema...</div>
              <div className="border-4 border-green-400 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
            </div>
          ) : (
            <div className="relative flex flex-col bg-black text-green-400 font-mono text-sm w-[80vw] h-[85vh] p-4 py-6 overflow-hidden shadow-2xl border border-green-500 rounded-2xl transition-all duration-500 ">
              <div
                className={`absolute left-0 top-0 z-10 bg-black p-4 ${isDrawerOpen ? 'border-r-2 bg-black z-30' : 'opacity-0'} border-green-400 h-full transition-all duration-300 w-60 ${isDrawerOpen ? 'border-opacity-100' : 'border-opacity-0'}`}
              >
                {isDrawerOpen && (
                  <div className="text-green-400 mt-10">
                    <ul>
                        {unlockedCommands.map((cmd, i) => {
                          let classi = "cursor-pointer text-md transition-colors";

                          if (cmd === 'whoami' && areWiresCut && wiresChecked) {
                            classi += " text-green-300 animate-pulse font-bold";
                          } else {
                            classi += " text-blue-300 hover:text-green-400";
                          }

                          return (
                            <li
                              key={i}
                              className={classi}
                              onClick={() => handleCommandClick(cmd)}
                            >
                              {cmd}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </div>

              <div ref={terminalRef} className={`ml-0 ${isDrawerOpen ? 'md:ml-60' : ''} font-[Gidole] overflow-y-auto overflow_hacking h-full pr-2 mt-5 transition-all overflow-hidden duration-300 z-10`}>
                {lines.map((line, i) => (
                  <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
                ))}
                {isReady && !isInputBlocked && (
                  <div className="flex">
                    <span>&gt; </span>
                    <input
                      autoFocus
                      className="bg-transparent font-[Gidole] outline-none text-green-400 flex-1 caret-green-500"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleCommand}
                    />
                    <span className="animate-pulse">█</span>
                  </div>
                )}
              </div>

              <div className={`absolute top-2 left-2 text-2xl text-green-400 cursor-pointer z-50`} onClick={toggleDrawer}>
                <FontAwesomeIcon icon={isDrawerOpen ? faEye : faEyeSlash} />
              </div>
            </div>
          )}
        </>
      )}
      {isTimerExpired ?
        <img className='absolute w-full h-full z-1000 opacity-80' onClick={() => window.location.reload()} src="/img/TimeEndsScreen.png" alt="ERROR SCREEN" />
        :
        ''
      }
    </div>
      
  );
}
