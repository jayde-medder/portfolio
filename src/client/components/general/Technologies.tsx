import ReactLogo from '@/assets/svgs/react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import TailwindLogo from '@/assets/svgs/tailwind';
import TypeScriptLogo from '@/assets/svgs/typescript';
import ShadCnLogo from '@/assets/svgs/shadcn';
import { PiBracketsCurlyLight } from 'react-icons/pi';
import { FaHtml5, FaGitAlt, FaNodeJs, FaJava } from 'react-icons/fa';
import {
  SiReactquery,
  SiPostgresql,
  SiSqlite,
  SiKnexdotjs,
  SiAuth0,
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import CLogo from '@/assets/svgs/c';
import AbletonLogo from '@/assets/svgs/ableton';

export function Technologies() {
  return (
    <>
      <h4>Front-End</h4>
      <div className="flex flex-col gap-2">
        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <ReactLogo />
          </div>
          <CardContent>
            <CardTitle>React</CardTitle>
            <CardDescription>
              JavaScript library for building UI
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <TailwindLogo />
          </div>
          <CardContent>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>Utility-first CSS framework</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <ShadCnLogo />
          </div>
          <CardContent>
            <CardTitle>ShadCn</CardTitle>
            <CardDescription>Flexible UI component library</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiNextdotjs size={40} />
          </div>
          <CardContent>
            <CardTitle>Next.js</CardTitle>
            <CardDescription>React web development framework</CardDescription>
          </CardContent>
        </Card>

        <h4>Languages</h4>

        <Card className="p-3 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <TypeScriptLogo />
          </div>
          <CardContent>
            <CardTitle>TypeScript</CardTitle>
            <CardDescription>
              Web programming language with static typing
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <PiBracketsCurlyLight size={40} />
          </div>
          <CardContent>
            <CardTitle>JavaScript</CardTitle>
            <CardDescription>Core web programiming language</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <FaHtml5 size={40} />
          </div>
          <CardContent>
            <CardTitle>HTML/CSS</CardTitle>
            <CardDescription>Web standard markup language</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <FaJava size={40} />
          </div>
          <CardContent>
            <CardTitle>Java</CardTitle>
            <CardDescription>
              Object-oriented programming language
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <CLogo />
          </div>
          <CardContent>
            <CardTitle>C</CardTitle>
            <CardDescription>
              General purpose programming language
            </CardDescription>
          </CardContent>
        </Card>

        <h4>Databases</h4>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiPostgresql size={40} />
          </div>
          <CardContent>
            <CardTitle>PostgreSQL</CardTitle>
            <CardDescription>
              Relational database management system
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiSqlite size={40} />
          </div>
          <CardContent>
            <CardTitle>SQLite</CardTitle>
            <CardDescription>
              Self-contained SQL database engine
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiReactquery size={40} />
          </div>
          <CardContent>
            <CardTitle>ReactQuery</CardTitle>
            <CardDescription>Data fetching & state management</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiKnexdotjs size={40} />
          </div>
          <CardContent>
            <CardTitle>Knex</CardTitle>
            <CardDescription>SQL query builder for JavaScript</CardDescription>
          </CardContent>
        </Card>

        <h4>Tools</h4>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <FaGitAlt size={40} />
          </div>
          <CardContent>
            <CardTitle>Git/GitHub</CardTitle>
            <CardDescription>Local & remote version control</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <FaNodeJs size={40} />
          </div>
          <CardContent>
            <CardTitle>Node.js</CardTitle>
            <CardDescription>JavaScript runtime environment</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiAuth0 size={40} />
          </div>
          <CardContent>
            <CardTitle>Auth0</CardTitle>
            <CardDescription>Authentication & Authorisation</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <MdApi size={40} />
          </div>
          <CardContent>
            <CardTitle>REST API's</CardTitle>
            <CardDescription>
              Protocols for application software integration
            </CardDescription>
          </CardContent>
        </Card>

        <h4>Software</h4>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <AbletonLogo />
          </div>
          <CardContent>
            <CardTitle>Ableton Live</CardTitle>
            <CardDescription>Digital Audio Workstation</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiAdobephotoshop size={40} />
          </div>
          <CardContent>
            <CardTitle>Photoshop</CardTitle>
            <CardDescription>Digital image editor</CardDescription>
          </CardContent>
        </Card>

        <Card className="p-2 flex items-center">
          <div className="bg-background p-2 rounded-sm">
            <SiAdobeillustrator size={40} />
          </div>
          <CardContent>
            <CardTitle>Illustrator</CardTitle>
            <CardDescription>Vector graphics editor</CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
