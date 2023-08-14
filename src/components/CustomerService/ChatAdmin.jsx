import { useState, useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const ChatAdmin = ({ openCs, toggleOpenCs }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const audioRecorderRef = useRef(null);
    const audioPlayerRef = useRef(null);

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
            if (audioRecorderRef.current) {
                audioRecorderRef.current.stop();
            }
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
        <div className={`text-white overflow-hidden bg-blue-500 z-50 bottom-0 fixed lg:h-auto lg:w-[400px] max-lg:hidden right-[30px] rounded-3xl ${openCs ? ' bottom-[30px]' : 'lg:h-0 lg:w-0'}`}>
            <div className={`lg:w-full bg-yellow-500 h-[50px] rounded-t-2xl flex justify-between items-center max-lg:hidden px-[20px] ${openCs ? '' : ' lg:hidden'}`}>
                <ul className="flex">
                    <li className="flex items-center mr-1">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </li>
                    <li>Name</li>
                </ul>
                <ul>
                    <li>
                        <button onClick={toggleOpenCs} className='bg-transparent p-2 rounded-full'>
                            <MdOutlineClose />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="p-4 overflow-scroll scrollbar-hidden h-[500px]">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
                        <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-gray-300' : 'bg-blue-700'}`}>
                            {message.text}
                            {message.image && <img src={message.image} alt="User" className="max-w-full mt-2" />}
                            {message.audio && (
                                <div className="flex items-center">
                                    <audio ref={audioPlayerRef} controls className="mt-2">
                                        <source src={message.audio} type="audio/webm" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col px-5 text-black w-full bottom-10 py-2 mt-5 bg-yellow-500">
                <div className='flex'>
                    <input
                        type="text"
                        className="flex-grow border rounded-md p-2"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    {newMessage.trim() === '' ? (
                        <div className="flex">
                            <button onClick={handleRecordAudio} className={`bg-blue-500 text-white px-4 rounded-r-lg ${isRecording ? 'bg-red-500' : 'hover:bg-blue-700'}`}>
                                {isRecording ? 'Stop Recording' : 'Record Audio'}
                            </button>
                            {recordedAudio && (
                                <button onClick={handleDeleteAudio} className="bg-red-500 text-white px-4 rounded-r-lg ml-2">
                                    Delete Audio
                                </button>
                            )}
                        </div>
                    ) : (
                        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 rounded-r-lg">
                            <AiOutlineSend className="text-4xl" />
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
        </div>
    );
};

export default ChatAdmin;
