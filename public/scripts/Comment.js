var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
        /*<h2 className="commentAuthor">
          {this.props.author}
        </h2>*/
	  <div className="comment">     
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});