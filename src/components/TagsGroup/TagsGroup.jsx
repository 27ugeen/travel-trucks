import Tag from '../Tag/Tag';
import scss from './TagsGroup.module.scss';

const TagsGroup = ({ tags }) => {
  return (
    <div className={scss.tagsGroup}>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag.label} />
      ))}
    </div>
  );
};

export default TagsGroup;
