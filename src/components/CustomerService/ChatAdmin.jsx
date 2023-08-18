import { useState, useRef, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';
import { HiChevronLeft } from 'react-icons/hi';
import { BsTrash } from 'react-icons/bs';
import { BiMicrophone, BiMicrophoneOff } from 'react-icons/bi';
import { getBotResponse } from './messageResponses';
import { useNavigate } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
const ChatAdmin = ({ openCs, toggleOpenCs }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const audioRecorderRef = useRef(null);
    const audioPlayerRef = useRef(null);
    const Navigate = useNavigate();
    const [iscontact, setContact] = useState(true);


    const handleShowBot = () => {
        setContact(false);
    };
    const handleCloseBot = () => {
        setContact(true);
    };
    
    



    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    
    useEffect(() => {
        if (newMessage.trim() === '') {
            document.removeEventListener('keydown', handleKeyPress);
        } else {
            document.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    },);

    const handleSendMessage = () => {

        if (newMessage.trim() !== '' || selectedImage || recordedAudio) {
            
            const newMessages = [
                ...messages,
                {
                    text: newMessage,
                    sender: 'user',
                    image: selectedImage,
                    audio: recordedAudio
                }
            ];
            setMessages(newMessages);
            setNewMessage('');
            setSelectedImage(null);
            setRecordedAudio(null);
            setIsRecording(false);

            setTimeout(() => {
                const botResponse = getBotResponse(newMessage.toLowerCase());
                setMessages([...newMessages, botResponse]);
            }, 500);


            if (audioRecorderRef.current) {
                audioRecorderRef.current.stop();
            }

            setTimeout(() => {
                const botResponse = getBotResponse(newMessage.toLowerCase());
                setMessages([...newMessages, botResponse]);
        
                // Check if bot response contains redirectTo property
                if (botResponse.redirectTo) {
                    Navigate(botResponse.redirectTo);
                }
            }, 500);
        }
    };

    const handleRecordAudio = async () => {
        if (!isRecording) {
            try {
                setIsRecording(true);
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const mediaRecorder = new MediaRecorder(stream);
                const chunks = [];

                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) {
                        chunks.push(e.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    setIsRecording(false);
                    const blob = new Blob(chunks, { type: 'audio/webm' });
                    const audioUrl = URL.createObjectURL(blob);
                    setRecordedAudio(audioUrl);
                };

                mediaRecorder.start();
                audioRecorderRef.current = mediaRecorder;
            } catch (error) {
                console.error('Error recording audio:', error);
            }
        } else {
            setIsRecording(false);
            if (audioRecorderRef.current) {
                audioRecorderRef.current.stop();
            }
        }
    };


    const handleDeleteAudio = () => {
        setRecordedAudio(null);
        if (audioRecorderRef.current) {
            audioRecorderRef.current.stop();
        }
    };



    

    return (
        <div className={`text-white overflow-hidden border-[1px] border-blue-500 bg-Darkmode z-50 bottom-0 fixed lg:h-auto lg:w-[400px] right-[30px] rounded-3xl ${openCs ? ' bottom-[30px] max-lg:hidden' : 'lg:h-0 lg:w-0 hidden'}`}>
            <div className={`lg:w-full bg-DarkBad h-[50px] rounded-t-2xl flex justify-between items-center max-lg:hidden px-[20px] ${openCs ? '' : ' lg:hidden'}`}>
                <ul className="flex">
                    <li className="flex items-center mr-1">

                        <div className={`w-[5px] h-[5px] bg-yellow-500 rounded-full ${iscontact ? 'hidden':'flex'}`}></div>
                    </li>
                    <li>{iscontact ? 'Chat' : 'Bot'}</li>
                </ul>
                <ul>
                    <li>
                        {iscontact ? (
                        <button onClick={toggleOpenCs} className='bg-transparent p-2 rounded-full'>
                            <MdOutlineClose />
                        </button>
                        ):(
                            <button onClick={handleCloseBot} className='bg-transparent p-2 rounded-full text-white'>
                                <HiChevronLeft/>
                            </button>
                        )}
                    </li>
                </ul>
            </div>
                {
                    iscontact
                        ? (
                        <div onClick={handleShowBot} className="p-4 overflow-scroll cursor-pointer scrollbar-hidden h-[500px] flex flex-col gap-2">
                            <div className='w-full bg-DarkBad h-[75px] justify-center items-center rounded-md flex'>
                                <div className='w-[21%] bg-transparent h-full py-5 flex items-center justify-center'>
                                    <img src="idk" alt="idk" className='bg-white w-[65px] h-[65px] rounded-full'/>
                                </div>
                                <div className='w-[79%] pl-3'>
                                    <p className='text-base'>Bot</p>
                                    <p className='text-sm italic'>this is a bot</p>
                                </div>
                            </div>
                        </div>
                        )
                        : (<div className={`p-4 overflow-scroll scrollbar-hidden h-[500px]`}>
                            {
                                messages.map((message, index) => (<div key={index} className={`mb-4 ${message.sender === 'user'
                                        ? 'text-right'
                                        : ''}`}>
                                    <div className={`p-2 rounded-lg ${message.sender === 'user'
                                            ? 'bg-gray-300 text-black'
                                            : 'bg-blue-700'}`}>
                                        {message.text}
                                        {message.image && <img src={message.image} alt="User" className="max-w-full mt-2"/>}
                                        {
                                            message.audio && (<div className="flex items-center">
                                                <audio ref={audioPlayerRef} controls="controls" className="mt-2">
                                                    <source src={message.audio} type="audio/webm"/>
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div>)
                                        }
                                    </div>
                                </div>))
                            }
                        </div>
                        )
                }
            {iscontact ? (
          <div className="flex flex-col px-5 gap-y-5 text-black w-full bottom-10 py-5 bg-DarkBad">

                <p>memek</p>
                </div>
            ):(
          <div className="flex flex-col px-5 gap-y-5 text-black w-full bottom-10 py-5 bg-DarkBad">
                <div className={`flex ${isRecording ? 'h-[42px]':'h-[42px]'}`}>
                    <input
                        type="text"
                        className={`flex-grow border border-blue-500 text-white bg-transparent outline-none rounded-l-lg p-2  ${recordedAudio ? 'w-auto':''}`}
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    {newMessage.trim() === '' ? (
                        <div className="flex">
                            <button onClick={handleRecordAudio} className={`bg-blue-500 text-white px-4 ${recordedAudio ? '':'rounded-r-lg'}  ${isRecording ? 'bg-red-500' : 'hover:bg-blue-700'}`}>
                                {isRecording ? <BiMicrophoneOff /> : <BiMicrophone />}
                            </button>
                            {recordedAudio && (
                                <button onClick={handleDeleteAudio} className="bg-blue-500 hover:bg-red-500 text-white px-4">
                                    <BsTrash />
                                </button>
                            )}
                            {recordedAudio && (
                                <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 rounded-r-lg">
                                    <AiOutlineSend />
                                </button>
                            )}
                        </div>
                    ) : (
                        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 rounded-r-lg">
                            <AiOutlineSend />
                        </button>
                    )}
                </div>
                <div className='flex'>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setSelectedImage(URL.createObjectURL(e.target.files[0]))}
                    />
                </div>
            </div> 
            )}
        </div>
    );
};

export default ChatAdmin;
