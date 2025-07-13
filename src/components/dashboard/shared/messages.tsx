
'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const initialConversations = [
    { id: 1, name: 'Dr. Emily Carter', lastMessage: 'See you then!', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
    { id: 2, name: 'Dr. Benjamin Lee', lastMessage: 'Please submit it by Friday.', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
    { id: 3, name: 'Prof. Sophia Rodriguez', lastMessage: 'Let\'s discuss this tomorrow.', avatar: 'https://placehold.co/100x100.png', aiHint: 'person portrait' },
];

const initialMessages = [
    { id: 1, sender: 'other', text: 'Hi! I wanted to ask about the upcoming assignment.'},
    { id: 2, sender: 'me', text: 'Of course. What specifically do you need help with?'},
    { id: 3, sender: 'other', text: 'I\'m having trouble with the first question.'},
];

type Message = {
    id: number;
    sender: 'me' | 'other';
    text: string;
};

export function Messages() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [selectedConversation, setSelectedConversation] = useState(initialConversations[0]);


    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const newMsg: Message = {
            id: messages.length + 1,
            sender: 'me',
            text: newMessage,
        };

        setMessages([...messages, newMsg]);
        setNewMessage('');
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messaging</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 h-[600px]">
            {/* Conversations List */}
            <div className="flex flex-col gap-2 border-r pr-4">
                <h3 className="font-semibold text-lg mb-2">Conversations</h3>
                {initialConversations.map(conv => (
                    <div 
                        key={conv.id} 
                        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${selectedConversation.id === conv.id ? 'bg-primary/90 text-primary-foreground' : 'hover:bg-muted'}`}
                        onClick={() => setSelectedConversation(conv)}
                    >
                        <Avatar>
                            <AvatarImage src={conv.avatar} alt={conv.name} data-ai-hint={conv.aiHint}/>
                            <AvatarFallback>{conv.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 truncate">
                            <p className="font-semibold">{conv.name}</p>
                            <p className={`text-sm truncate ${selectedConversation.id === conv.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{conv.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat Window */}
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 p-2 border-b">
                    <Avatar>
                        <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} data-ai-hint={selectedConversation.aiHint} />
                        <AvatarFallback>{selectedConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{selectedConversation.name}</h3>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${msg.sender === 'me' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-2 border-t mt-auto">
                    <form onSubmit={handleSendMessage} className="relative">
                        <Input 
                            placeholder="Type a message..." 
                            className="pr-12" 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <Button type="submit" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
