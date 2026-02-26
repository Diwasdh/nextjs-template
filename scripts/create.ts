import fs from 'fs';
import path from 'path';

type CreateType = 'page' | 'component';

const args = process.argv.slice(2);
const type = args[0] as CreateType;
const name = args[1];

if (!type || !name) {
  console.log('Usage: yarn create <page|component> <Name>');
  process.exit(1);
}

const pascalCase = (str: string) =>
  str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());

const ROOT = process.cwd();

if (type === 'page') {
  const pageName = name.toLowerCase();
  const pageDir = path.join(ROOT, 'app', pageName);
  const filePath = path.join(pageDir, 'page.tsx');

  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });

  const content = `import { Base } from '@/components/ui/base'
import { Container } from '@/components/ui/container'

export default function ${pascalCase(pageName)}() {
  return (
    <main>
      <Base>
        <Container>
          <h1 className="text-4xl font-bold">${pascalCase(pageName)} Page</h1>
          <p>This is the ${pascalCase(pageName)} page.</p>
        </Container>
      </Base>
    </main>
  )
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`✅ Page created at ${filePath}`);
} else if (type === 'component') {
  const compName = pascalCase(name);
  const compDir = path.join(ROOT, 'components', 'ui');
  if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });
  const filePath = path.join(compDir, `${compName}.tsx`);

  const content = `import { ReactNode } from 'react'

interface ${compName}Props {
  children?: ReactNode
  className?: string
}

export function ${compName}({ children, className = '' }: ${compName}Props) {
  return <div className={className}>{children}</div>
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`✅ Component created at ${filePath}`);
} else {
  console.log('Type must be "page" or "component"');
  process.exit(1);
}
