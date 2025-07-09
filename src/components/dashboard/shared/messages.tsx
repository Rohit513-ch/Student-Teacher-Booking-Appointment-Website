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
import { Separator } from '@/components/ui/separator';

const conversations = [
    { id: 1, name: 'Dr. Emily Carter', lastMessage: 'See you then!', avatar: 'https://placehold.co/100x100.png' },
    { id: 2, name: 'Alex Johnson', lastMessage: 'Thank you for your help.', avatar: 'https://placehold.co/100x100.png' },
    { id: 3, name: 'Prof. Davis', lastMessage: 'Let\'s discuss this tomorrow.', avatar: 'https://placehold.co/100x100.png' },
];

const messages = [
    { id: 1, sender: 'other', text: 'Hi! I wanted to ask about the upcoming assignment.'},
    { id: 2, sender: 'me', text: 'Of course. What specifically do you need help with?'},
    { id: 3, sender: 'other', text: 'I\'m having trouble with the first question.'},
]

export function Messages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messaging</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 h-[600px]">
            {/* Conversations List */}
            <div className="flex flex-col gap-2 border-r pr-4">
                <h3 className="font-semibold text-lg">Conversations</h3>
                {conversations.map(conv => (
                    <div key={conv.id} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted">
                        <Avatar>
                            <AvatarImage src={conv.avatar} alt={conv.name} />
                            <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 truncate">
                            <p className="font-semibold">{conv.name}</p>
                            <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat Window */}
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 p-2 border-b">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Dr. Emily Carter" />
                        <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">Dr. Emily Carter</h3>
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
                    <div className="relative">
                        <Input placeholder="Type a message..." className="pr-12" />
                        <Button type="submit" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
