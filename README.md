# Pentilo Agency Website

## Vision

A business card website for the SMM agency "Pentilo Agency".

## Project Name

Pentilo Agency

## Project Goal

To create a positive image for the agency and attract clients/partners.

## Advantages

- Serious approach (regular monthly reporting for clients, quality strategy
  selection).
- Responsibility towards deadlines.
- Flexibility and consideration of client's wishes (sometimes even if it might
  affect the result).

## Target Audience

- Age: 20-35, 35-45, 45-65
- Gender: Male, Female
- Income Level: Medium, High

## Product Scope

Development of a single-page business card website for the SMM agency "Pentilo
Agency", whose main area of activity is social media marketing (content,
shooting, advertising, account moderation).

## Technical Stack

- Front-end: Next.js
- CSS framework: Tailwind

## Non-functional Requirements

### Accessibility

- Intuitive design.
- Mobile-friendly.

### Performance

- Web resource available for any internet connection.

### Security

- SSL connection.
- No public access to private system components.
- Rate limits.
- Check for common attack types (sqli, xss, etc.).
- All passwords must be hashed.
- User access via sessions.

### Supported Languages

- Ukrainian

### Design / Design Layout

[Design Layout on Figma](https://www.figma.com/file/6sZXbMHRLl7lzcZykvfDNO/Pentilo-Agency-Website?type=design&node-id=323-8&mode=design&t=YxWCtpz2RaH0VYH3-0)

## Functional Requirements

(Here, you can list down the detailed functional requirements as provided, such
as HEADER, BODY, FOOTER, etc.)

---

## 🥁 Getting Started

1. **Clone the repo**

```bash
git@github.com:SoftRyzen-internship/pentilo-agency.git
```

2. **Install dependencies** It's recommended to use npm:

```
npm install
```

3. **Run the project**

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**💁‍♀️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── layout
    ├── Header
        ├── index.ts
        ├── Header.tsx
    ├── Footer
        ├── index.ts
        ├── Footer.tsx
```

</details>

---

**💁‍♀️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**💁‍♀️ Description of object structure**

<details>
<summary><b>💡 Structure: </b></summary>
<br/>
```
|-- components -> folder with reusable components
  |-- NameComponent -> folders for each component
    |-- NameComponent.tsx -> main component
    |-- index.ts -> file for re-export
|-- layout -> components that are used as a main template
|-- app -> pages and routing
|-- public -> static files
|-- styles -> global styles

<!-- You can create these folders already in work -->

|-- data -> data for the project ( from graphql, json, etc.) |-- hooks -> custom
users hooks |-- utils -> helpers, functions, etc.

```

</details>

---
## 📚 Components API
Each component has its own API. You can find it in the component's folder. This is a list of more common components and their API.
This is example of API for component `Heading`

<details>
<summary><b>Heading</b></summary>
<br/>
| Prop          | Default     | Description                                     |
| --------------| ----------- | ----------------------------------------------- |
| `tag`         | `h2`        | choose the tag of title you'd need: `h1` - `h3` |
| `variant`     | `primary`   | `main`, `primary`, `secondary`, `tertiary`      |
| `children`    | `undefined` | required, any content                           |
| `className`   | `undefined` | add custom or additional css class you'd need   |
| `data-shadow` | `undefined` | add text as a shadow decoration of the element  |
</details>
---
```
