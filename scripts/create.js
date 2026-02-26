import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const type = args[0]; // 'page' or 'component'
const name = args[1];

if (!type || !name) {
  console.log('Usage: yarn run create <page|component> <Name>');
  process.exit(1);
}

// Convert kebab-case or snake_case to PascalCase
const pascalCase = (str) =>
  str
    .split(/[-_]/g)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');

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
      <Base>
        <Container>
          <h1>${pascalCase(pageName)} Page</h1>
          <p>This is the ${pascalCase(pageName)} page.</p>
        </Container>
      </Base>
  )
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`✅ Page created at ${filePath}`);
} else if (type === 'component') {
  const compName = pascalCase(name);
  const compDir = path.join(ROOT, 'components', 'ui');
  const scssDir = path.join(ROOT, 'styles', 'components', 'ui');
  if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });
  if (!fs.existsSync(scssDir)) fs.mkdirSync(scssDir, { recursive: true });

  const tsxFilePath = path.join(compDir, `${compName}.tsx`);
  const scssFilePath = path.join(scssDir, `${compName}.module.scss`);

  const tsxContent = `import { ReactNode } from 'react'
import styles from '@/styles/components/ui/${compName}.module.scss'

interface ${compName}Props {
  children?: ReactNode
  className?: string
}

export function ${compName}({ children, className = '' }: ${compName}Props) {
  return <div className={\`\${styles.root} \${className}\`}>{children}</div>
}
`;

  const scssContent = `/* Styles for ${compName} component */
.root {
  display: flex;
}
`;

  fs.writeFileSync(tsxFilePath, tsxContent);
  fs.writeFileSync(scssFilePath, scssContent);
  console.log(`✅ Component created at ${tsxFilePath}`);
  console.log(`✅ SCSS file created at ${scssFilePath}`);
} else {
  console.log('Type must be "page" or "component"');
  process.exit(1);
}
