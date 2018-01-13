# Make it more obvious that a PR is a work in progress and shouldn't be merged yet
warn("PR is classed as Work in Progress") if github.pr_title.include? "WIP"

fail("PR does not conform to naming guidelines") if !github.pr_title.match(%r{^(feat|docs|test|fix|refactor|chore)(\([a-z-0-9]+\))?\:(\s){1}(\S)+.*?$})

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 500

if github.pr_body.length < 230
  fail "Please provide a summary in the Pull Request description"
end
