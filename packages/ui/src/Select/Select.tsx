import React, { ReactNode } from 'react';
import Select, {
  components,
  StylesConfig,
  DropdownIndicatorProps,
  OptionProps,
  MenuListProps,
  ControlProps,
  ClearIndicatorProps,
  MultiValueProps,
  InputProps,
} from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactTooltip from 'react-tooltip';
import styled from '@emotion/styled';

import { Box } from '../Box';
import Text from '../Text';
import Tag from '../Tag';
import { THEMES } from '../consts';
import { UAngleDown, UTimes } from '../unicons';
import Avatar from '../Avatar';

const LabelWithIcon = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin-right: 12px;
  }
`;

const CreateInputWrapper = styled.div`
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey3};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const CreateInput = styled.input`
  flex: 1 1 auto;
  background-color: transparent;
  border: none;

  &:focus-visible {
    outline: none;
  }
`;

export type Option = {
  value: string;
  label: string;
  icon?: string;
};

interface SelectProps {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: Option | Option[] | string | null;
  onChange?: (e: any) => void;
  options: Option[];
  optionAsTag?: boolean;
  isMulti?: boolean;
  isCreatable?: boolean;
  isFilter?: boolean;
  isClearable?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  onFocus?: () => void;
  onBlur?: (e: any) => void;
  hideSelectedOptions?: boolean;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  menuIsOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  controlShouldRenderValue?: boolean;
  onCreateOption?: (value: string) => void;
  handleRemoveSelectedOption?: (value: string) => void;
  leftIcon?: () => ReactNode;
}

const ReactSelect = (props: SelectProps) => {
  const {
    id,
    name,
    className,
    placeholder = '',
    value,
    onChange,
    options,
    optionAsTag = false,
    isMulti,
    isCreatable,
    isFilter,
    isClearable,
    isFocused,
    isDisabled,
    onFocus,
    onBlur,
    hideSelectedOptions = false,
    inputValue,
    onInputChange,
    onMenuOpen,
    onMenuClose,
    onCreateOption,
    handleRemoveSelectedOption,
    leftIcon,
    ...restProps
  } = props;

  const WrapperComponent = isCreatable ? CreatableSelect : Select;

  const handleOnMenuOpen = () => {
    ReactTooltip.rebuild();
    onMenuOpen && onMenuOpen();
  };

  const handleOnMenuClose = () => {
    ReactTooltip.hide();
    onMenuClose && onMenuClose();
  };

  const customStyles: StylesConfig = {
    singleValue: (provided: any) => ({
      ...provided,
      ...(isDisabled
        ? {
            color: THEMES.default.colors.lightGrey1,
          }
        : {}),
    }),
    multiValue: (provided: any) => ({
      ...provided,
      background: 'transparent',
      margin: 0,
      display: 'inline-flex',
      flexShrink: 0,
      maxWidth: '200px',
      borderRadius: 0,
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: optionAsTag ? '24px' : '20px',
      padding: 0,
      paddingLeft: 0,
      display: 'inline-flex',
      borderRadius: 0,
      color: THEMES.default.colors.black,
    }),
    menu: (provided: any) => ({
      ...provided,
      border: 0,
      boxShadow: '0px 4px 8px 0px #1111111F',
      borderRadius: 8,
    }),
    menuList: (provided: any) => {
      return {
        ...provided,
        margin: 0,
        padding: 0,
        ':first-of-type': {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        ':last-child': {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
      };
    },
    option: (provided: any, state: any) => {
      const backgroundColor = state.isSelected
        ? THEMES.default.colors.lightGrey3
        : THEMES.default.colors.white;

      return {
        ...provided,
        color: THEMES.default.colors.black,
        backgroundColor,
        padding: '12px 16px',
        cursor: 'pointer',
        display: 'inline-flex',
        ':hover': {
          backgroundColor: THEMES.default.colors.lightGrey3,
        },
      };
    },
    control: (provided: any, state: any) => {
      const borderColor =
        state.isFocused && !isFilter
          ? THEMES.default.colors.blue
          : state.hasValue
          ? THEMES.default.colors.lightGrey2
          : THEMES.default.colors.lightGrey3;

      const getBackgroundColor = () => {
        if (isFilter) {
          return state.hasValue
            ? THEMES.default.colors.lightGrey3
            : THEMES.default.colors.white;
        } else {
          return state.hasValue || isFocused
            ? THEMES.default.colors.white
            : THEMES.default.colors.lightGrey3;
        }
      };

      const boxShadow =
        state.isFocused && !isFilter
          ? `0px 0px 0px 4px ${THEMES.default.colors.blue}33`
          : 'none';

      return {
        ...provided,
        borderRadius: isFilter ? 100 : 8,
        borderColor,
        boxShadow,
        padding: 0,
        paddingLeft: leftIcon ? 10 : 0,
        transition:
          'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
        ':hover, :focus': {
          borderColor: !isFilter
            ? THEMES.default.colors.blue
            : props.placeholder === '' && !state.hasValue
            ? THEMES.default.colors.lightGrey3
            : THEMES.default.colors.lightGrey2,
          boxShadow: !isFilter
            ? `0px 0px 0px 4px ${THEMES.default.colors.blue}33`
            : 'none',
          backgroundColor: isFilter
            ? THEMES.default.colors.black
            : THEMES.default.colors.white,
          color: isFilter
            ? THEMES.default.colors.white
            : THEMES.default.colors.black,
          '*': {
            color: isFilter && THEMES.default.colors.white,
          },
        },
        background: getBackgroundColor(),
      };
    },
    input: (provided: any) => {
      return {
        ...provided,
        padding: 0,
        margin: 0,
        outline: 0,
      };
    },
    valueContainer: (provided: any) => {
      return {
        ...provided,
        ...(isDisabled ? {} : { cursor: 'pointer' }),
        padding: '11px 16px',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        ':hover': {
          color: isFilter ? THEMES.default.colors.white : 'inherit',
        },
        flexWrap: 'nowrap',
        overflow: 'auto',
        gap: '4px',
      };
    },
    clearIndicator: (provided: any) => {
      return {
        ...provided,
        ...(isDisabled ? {} : { cursor: 'pointer' }),
        color: THEMES.default.colors.black,
        paddingRight: '16px',
      };
    },
    dropdownIndicator: (provided: any) => {
      return {
        ...provided,
        ...(isDisabled ? {} : { cursor: 'pointer' }),
        padding: '8px 16px 8px 8px',
      };
    },
  };

  const overrideDropdownIndicator = (props: DropdownIndicatorProps) => {
    return !(props.hasValue && isClearable) ? (
      <components.DropdownIndicator {...props}>
        <UAngleDown width={24} />
      </components.DropdownIndicator>
    ) : null;
  };

  const overrideClearIndicator = (props: ClearIndicatorProps) => {
    return isClearable ? (
      <components.ClearIndicator {...props}>
        <UTimes width={24} />
      </components.ClearIndicator>
    ) : null;
  };

  const overrideOption = (props: OptionProps<any>) => {
    const {
      children,
      data: { data },
    } = props;

    const tooltipAttributes =
      data && data.tooltip
        ? Object.keys(data.tooltip).reduce<Record<string, any>>((acc, key) => {
            acc[`data-${key}`] = data.tooltip[key];
            return acc;
          }, {})
        : {};

    const renderOption = () => {
      if (optionAsTag) {
        return (
          <Tag avatar={props.data?.icon && <Avatar src={props.data.icon} />}>
            {children}
          </Tag>
        );
      }

      if (props.data?.icon) {
        return (
          <LabelWithIcon>
            <Avatar size={24} src={props.data?.icon}>
              {props.data?.label}
            </Avatar>
            {children}
          </LabelWithIcon>
        );
      }

      return children;
    };

    const renderChildren = () => {
      if (props.data?.__isNew__) {
        // TODO add localization
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text
              color={THEMES.default.colors.primary}
              style={{ display: 'inline-block', flexShrink: 0 }}
            >
              Create new
            </Text>
            &nbsp;
            <Tag>{inputValue}</Tag>
            &nbsp;
            <Text
              color={THEMES.default.colors.primary}
              style={{ display: 'inline-block', flexShrink: 0 }}
            >
              tag
            </Text>
          </div>
        );
      }

      return renderOption();
    };

    return (
      <components.Option
        {...props}
        innerProps={{ ...props.innerProps, ...tooltipAttributes }}
      >
        {renderChildren()}
      </components.Option>
    );
  };

  const overrideMenuList = (props: MenuListProps) => {
    ReactTooltip.rebuild();
    const { selectProps, children } = props;

    return (
      <>
        {isCreatable && (
          <>
            <CreateInputWrapper>
              {Array.isArray(selectProps.value) &&
                selectProps.value.map((selected) => (
                  <Tag
                    key={selected.value}
                    rightIcon={<UTimes />}
                    avatar={selected.icon && <Avatar src={selected.icon} />}
                    onClose={() =>
                      handleRemoveSelectedOption &&
                      handleRemoveSelectedOption(selected.value)
                    }
                  >
                    {selected.label}
                  </Tag>
                ))}
              <CreateInput
                value={inputValue}
                autoFocus={true}
                onChange={(e) =>
                  onInputChange && onInputChange(e.currentTarget.value)
                }
              />
            </CreateInputWrapper>
            <Box sx={{ padding: '16px 14px' }}>
              <Text textSize="small" color={THEMES.default.colors.grey}>
                Choose one of the options or create a new one
              </Text>
            </Box>
          </>
        )}
        <components.MenuList {...props}>{children}</components.MenuList>
      </>
    );
  };

  const overrideMultiValue = ({
    children,
    data,
    ...props
  }: MultiValueProps) => {
    const option = data as Option;

    return (
      <components.MultiValue data={data} {...props}>
        <Tag avatar={option.icon && <Avatar src={option.icon} />}>
          {children}
        </Tag>
      </components.MultiValue>
    );
  };

  const overrideInput = ({ children, ...props }: InputProps) => (
    <components.Input
      {...props}
      disabled={isCreatable && props.selectProps.menuIsOpen}
    >
      {children}
    </components.Input>
  );

  const overrideControl = ({ children, ...props }: ControlProps) => (
    <components.Control {...props} isFocused={isFocused || false}>
      <>
        {leftIcon && leftIcon()}
        {children}
      </>
    </components.Control>
  );

  return (
    <WrapperComponent
      id={id}
      name={name}
      onChange={onChange}
      inputValue={inputValue}
      onFocus={onFocus}
      onBlur={onBlur}
      styles={customStyles}
      options={options}
      hideSelectedOptions={hideSelectedOptions}
      value={value}
      components={{
        DropdownIndicator: overrideDropdownIndicator,
        IndicatorSeparator: () => null,
        Option: overrideOption,
        MenuList: overrideMenuList,
        MultiValue: overrideMultiValue,
        Input: overrideInput,
        MultiValueRemove: () => null,
        Control: overrideControl,
        ClearIndicator: overrideClearIndicator,
      }}
      onMenuOpen={handleOnMenuOpen}
      onMenuClose={handleOnMenuClose}
      isMulti={isMulti}
      isClearable={isClearable}
      closeMenuOnSelect={!isMulti}
      placeholder={placeholder}
      isDisabled={isDisabled}
      className={className}
      onCreateOption={onCreateOption}
      {...restProps}
    />
  );
};

export default ReactSelect;