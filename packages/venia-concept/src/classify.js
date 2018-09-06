import { Component, createElement } from 'react';

const merge = (...args) => Object.assign({}, ...args);

const classify = defaultClasses => WrappedComponent =>
    class extends Component {
        static displayName = `Classify(${WrappedComponent.displayName})`;

        render() {
            const { className, classes, ...restProps } = this.props;
            const classNameAsObject = className ? { root: className } : null;
            const finalClasses = merge(
                defaultClasses,
                classNameAsObject,
                classes
            );

            return <WrappedComponent {...restProps} classes={finalClasses} />;
        }
    };

export default classify;
