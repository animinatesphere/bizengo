interface Block {
  type: string;
  [key: string]: any;
}

interface NotionBlockRendererProps {
  blocks: Block[];
}

export default function NotionBlockRenderer({
  blocks,
}: NotionBlockRendererProps) {
  return (
    <div>
      {blocks.map((block) => (
        <BlockComponent key={block.id} block={block} />
      ))}
    </div>
  );
}

function BlockComponent({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-4">
          {block.paragraph?.rich_text?.map((text: any, index: number) => (
            <span key={index} className={getTextStyle(text.annotations)}>
              {text.plain_text}
            </span>
          ))}
        </p>
      );

    case "heading_1":
      return (
        <h1 className="text-3xl font-bold mb-4">
          {block.heading_1?.rich_text?.[0]?.plain_text}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="text-2xl font-semibold mb-3">
          {block.heading_2?.rich_text?.[0]?.plain_text}
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="text-xl font-medium mb-2">
          {block.heading_3?.rich_text?.[0]?.plain_text}
        </h3>
      );

    case "bulleted_list_item":
      return (
        <ul className="list-disc ml-6 mb-2">
          <li>{block.bulleted_list_item?.rich_text?.[0]?.plain_text}</li>
        </ul>
      );

    case "numbered_list_item":
      return (
        <ol className="list-decimal ml-6 mb-2">
          <li>{block.numbered_list_item?.rich_text?.[0]?.plain_text}</li>
        </ol>
      );

    case "image":
      const imageUrl = block.image?.file?.url || block.image?.external?.url;
      return imageUrl ? (
        <img src={imageUrl} alt="Blog image" className="w-full my-4 rounded" />
      ) : null;

    default:
      return null;
  }
}

function getTextStyle(annotations: any): string {
  let classes = "";

  if (annotations?.bold) classes += "font-bold ";
  if (annotations?.italic) classes += "italic ";
  if (annotations?.underline) classes += "underline ";
  if (annotations?.strikethrough) classes += "line-through ";
  if (annotations?.code)
    classes += "bg-gray-100 px-1 rounded font-mono text-sm ";

  return classes;
}
